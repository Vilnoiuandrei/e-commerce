"use client";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="back-button ">
      <IoIosArrowBack className="text-3xl" />
    </button>
  );
}
