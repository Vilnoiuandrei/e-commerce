import Image from "next/image";

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: { rate: number; count: number };
  };
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <li className="p-4 border rounded-lg shadow hover:shadow-lg transition">
      <Image
        className="mx-auto h-auto"
        src={product.image}
        alt={product.title}
        width={500}
        height={0}
        placeholder="blur"
        blurDataURL={product.image}
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 font-medium">${product.price}</p>
      <p className="text-gray-500 text-sm mb-2">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <p className="text-gray-600 text-sm">{product.description}</p>
    </li>
  );
}
