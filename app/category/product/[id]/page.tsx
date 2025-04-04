"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import Loader from "../../../_components/Loader";
import { useCart } from "./../../../_context/CartContext";
import BackButton from "@/app/_components/BackButton";
import LikeProducts from "@/app/_components/LikeProducts";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

export default function ProductItem() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isClicked, setIsClicked] = useState(false);

  const { data, isLoading, isError } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id as string),
    enabled: !!id, // Only run the query if id is available
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading product.</p>;

  const handleAddToCart = () => {
    if (data) {
      addToCart(data);
    }
    setIsClicked(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {data && (
        <>
          <div className="flex flex-row gap-3 my-4 justify-center items-center mb-2">
            <BackButton />

            <h1 className="text-2xl font-bold ">{data.title}</h1>
          </div>
          <div className="h-96 relative mb-4">
            <Image
              src={data.image}
              alt={data.title}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={data.image}
            />
          </div>
          <p className="text-xl font-semibold mb-2">${data.price}</p>
          <p className="mb-4">{data.description}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">{data.rating.rate} ★</span>
            <span>({data.rating.count} reviews)</span>
          </div>
          <div className="flex justify-center items-center mt-3 py-2 ">
            <button
              className={`h-10 w-56 shadow-md rounded-md flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                isClicked ? "bg-red-500" : "bg-blue-400"
              }`}
              onClick={handleAddToCart}
            >
              {isClicked ? "Added to cart" : "Add to cart"}
            </button>
            <div className="flex items-center justify-center  border-2  border-blue-400 bg-blue-400 rounded-lg h-10 w-10 ml-3">
              <LikeProducts product={data} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
