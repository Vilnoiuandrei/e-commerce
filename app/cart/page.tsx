"use client";

import { useCart } from "./../_context/CartContext";
import Image from "next/image";

export default function Cart() {
  const { cart, decreaseQuantity, increaseQuantity } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mt-4">
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
                  <p className="text-gray-500">${item.price * item.quantity}</p>
                  <div className="text-gray-500 flex items-center space-x-2 h-12">
                    <button
                      className="bg-red-600 rounded-full text-black w-5 h-5 flex items-center justify-center text-lg "
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span> Quantity: {item.quantity}</span>

                    <button
                      className="bg-green-600 rounded-full text-black w-5 h-5 flex items-center justify-center "
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-3xl font-bold mt-8">
            Total: ${total.toFixed(2)}
          </h2>
        </>
      )}
    </div>
  );
}
