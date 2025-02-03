"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useCart } from "../_context/CartContext";

export default function Navigation() {
  const { data: session } = useSession(); // Get session info
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl tracking-wide">
          OpalCart
        </Link>
        {/* Search Bar */}
        {/* <div className="hidden md:block flex-grow mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 max-w-96"
          />
        </div> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          {session ? (
            <>
              <Link
                href="/profile"
                className="text-gray-700 hover:text-blue-600"
              >
                Profile
              </Link>
            </>
          ) : (
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
          )}
          <Link href="/cart" className="relative">
            <svg
              className="w-6 h-6 text-gray-700 hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13L6 16.6a1 1 0 001 1.4h10.6a1 1 0 001-1.4L17 13M13 21a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">
              {cart.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-gray-700"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {/* <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          /> */}

          <Link
            href="/about"
            className="block text-gray-700 hover:text-blue-600"
          >
            About
          </Link>
          {session ? (
            <>
              <Link
                href="/profile"
                className="block text-gray-700 hover:text-blue-600"
              >
                Profile
              </Link>
            </>
          ) : (
            <Link href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
          )}
          <Link
            href="/cart"
            className="block text-gray-700 hover:text-blue-600"
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}
