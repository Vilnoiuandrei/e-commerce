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

const fetchMenClothing = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch men's clothing");
  }

  return res.json();
};

export default function MenClothingList() {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["menClothing"],
    queryFn: fetchMenClothing,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading men's clothing.</p>;

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
      {data?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
