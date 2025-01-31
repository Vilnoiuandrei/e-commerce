"use client";

import { useQuery } from "@tanstack/react-query";
import ProductItem from "./Product";
import Loader from "./Loader";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fetchJewelery = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch jewelry");
  }

  return res.json();
};

export default function JeweleryList({}) {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["jewelery"],
    queryFn: fetchJewelery,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading jewelery.</p>;

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
      {data?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
