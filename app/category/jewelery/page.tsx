import BackButton from "@/app/_components/BackButton";
import JeweleryList from "@/app/_components/JeweleryList";

export default function Jewelery() {
  return (
    <div>
      <div className="flex flex-row gap-3 my-4 justify-center items-center">
        <BackButton />
        <h1 className="text-2xl font-bold">Jewelery</h1>
      </div>
      <JeweleryList />
    </div>
  );
}
