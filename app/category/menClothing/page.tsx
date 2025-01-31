import BackButton from "@/app/_components/BackButton";
import MenClothingList from "@/app/_components/MenClothingList";

export default function MenClothing() {
  return (
    <div>
      <div className="flex flex-row gap-3 my-4 justify-center items-center">
        <BackButton />
        <h1 className="text-2xl font-bold">Men&apos;s Clothing</h1>
      </div>
      <MenClothingList />
    </div>
  );
}
