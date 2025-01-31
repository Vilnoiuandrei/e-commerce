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

const fetchWomenClothing = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch women's clothing");
  }

  return res.json();
};

export default function WomenClothingList() {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["womenClothing"],
    queryFn: fetchWomenClothing,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading women's clothing.</p>;

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
      {data?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
