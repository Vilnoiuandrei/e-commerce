"use client";

import { useQuery } from "@tanstack/react-query";
import ProductItem from "../_components/Product";
import Loader from "../_components/Loader";

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

const fetchElectronics = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch electronics");
  }

  return res.json();
};

export default function ElectronicsList({}) {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["electronics"],
    queryFn: fetchElectronics,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading electronics.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Electronics</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
        {data?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
