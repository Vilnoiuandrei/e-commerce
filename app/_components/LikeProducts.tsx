"use client";

import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeProductsProps {
  product: {
    id: number;
  };
}

interface LikedProductsApiResponse {
  products: number[];
}

const fetchLikedProducts = async (): Promise<LikedProductsApiResponse> => {
  const res = await fetch("/api/likes/get");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};

const fetchAddLikedProducts = async (id: number | string): Promise<void> => {
  const res = await fetch("/api/likes/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  return res.json();
};

const fetchRemovedLikedProducts = async (
  id: number | string
): Promise<void> => {
  const res = await fetch("/api/likes/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};

function checkLikedProducts(
  userProductsId: number[],
  productId: number
): boolean {
  return userProductsId.some((userProductId) => userProductId === productId);
}

export default function LikeProducts({ product }: LikeProductsProps) {
  const productId = product.id;

  const { data: likedProductsData, refetch: refetchLikedProducts } =
    useQuery<LikedProductsApiResponse>({
      queryKey: ["savedProducts"],
      queryFn: fetchLikedProducts,
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

  const [like, setLike] = useState(false);

  const addLikeMutation = useMutation({
    mutationFn: fetchAddLikedProducts,
    onSuccess: () => {
      refetchLikedProducts();
      setLike(true);
    },
  });

  const removeLikeMutation = useMutation({
    mutationFn: fetchRemovedLikedProducts,
    onSuccess: () => {
      refetchLikedProducts();
      setLike(false);
    },
  });

  useEffect(() => {
    if (likedProductsData) {
      const likedProducts = likedProductsData.products;
      setLike(checkLikedProducts(likedProducts, productId));
    }
  }, [likedProductsData, productId]);

  function handleLiked(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    e.preventDefault();

    if (like) {
      removeLikeMutation.mutate(productId);
    } else {
      addLikeMutation.mutate(productId);
    }
  }

  return (
    <div className="  text-3xl  text-red-600" onClick={handleLiked}>
      {like ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
}
