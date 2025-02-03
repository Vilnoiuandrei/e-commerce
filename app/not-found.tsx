import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-lg">Could not find requested resource</p>
      <Link
        href="/"
        className="bg-blue-600  text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition mt-4"
      >
        Return Home
      </Link>
    </div>
  );
}
