import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
  return (
    <Link href="/">
      <IoIosArrowBack className="text-3xl" />
    </Link>
  );
}
