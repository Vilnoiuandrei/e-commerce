"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-lg mb-6">
        We&apos;re sorry, but an unexpected error has occurred.
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
