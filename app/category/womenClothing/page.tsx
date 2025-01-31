import BackButton from "@/app/_components/BackButton";
import WomenClothingList from "@/app/_components/WomenClothingList";

export default function WomenClothing() {
  return (
    <div>
      <div className="flex flex-row gap-3 my-4 justify-center items-center">
        <BackButton />
        <h1 className="text-2xl font-bold ">Women's Clothing</h1>
      </div>
      <WomenClothingList />
    </div>
  );
}
