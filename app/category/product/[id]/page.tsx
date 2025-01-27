"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Loader from "../../../_components/Loader";
import { useCart } from "../../../_contex/CartContex";

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

  const { data, isLoading, isError } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id as string),
    enabled: !!id, // Only run the query if id is available
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading product.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      {data && (
        <>
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
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
          <div className="flex justify-center items-center mt-3 py-2">
            <button
              className="bg-blue-400 h-10 w-56 shadow-md rounded-md flex justify-center items-center"
              onClick={() => addToCart(data)}
            >
              Add to cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
