import BackButton from "@/app/_components/BackButton";
import AllProductsList from "@/app/_components/AllProductsList";

export default function AllProducts() {
  return (
    <div>
      <div className="flex flex-row gap-3 my-4 justify-center items-center">
        <BackButton />
        <h1 className="text-2xl font-bold">All Products</h1>
      </div>
      <AllProductsList />
    </div>
  );
}
