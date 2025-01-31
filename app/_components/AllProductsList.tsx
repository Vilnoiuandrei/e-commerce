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
  rating: {
    rate: number;
    count: number;
  };
}

const fetchAllProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default function AllProductsList() {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading products.</p>;

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
      {data?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
