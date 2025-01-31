import Link from "next/link";
import { FaTshirt, FaTv, FaRing } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-blue-600 flex items-center justify-center">
        <div className="absolute text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-6">
            Shop the best products with AI-powered recommendations
          </p>
          <Link href="/category/all">
            <div className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Shop Now
            </div>
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-12 px-6">
        <h2 className="font-bold text-3xl mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/category/menClothing">
            <div className="block border-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition text-center">
              <FaTshirt className="mx-auto text-6xl my-4" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Men Clothing
                </h3>
              </div>
            </div>
          </Link>
          <Link href="/category/womenClothing">
            <div className="block border-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition text-center">
              <GiLargeDress className="mx-auto text-6xl my-4" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Women Clothing
                </h3>
              </div>
            </div>
          </Link>
          <Link href="/category/electronics">
            <div className="block border-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition text-center">
              <FaTv className="mx-auto text-6xl my-4" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Electronics
                </h3>
              </div>
            </div>
          </Link>
          <Link href="/category/jewelery">
            <div className="block border-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition text-center">
              <FaRing className="mx-auto text-6xl my-4" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Jewelery
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
