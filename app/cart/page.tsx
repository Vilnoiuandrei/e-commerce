"use client";

import { useCart } from "../_contex/CartContex";
import Image from "next/image";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex items-center mb-4">
              <div className="w-24 h-24 relative mr-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
