import BackButton from "@/app/_components/BackButton";
import ElectronicsList from "@/app/_components/ElectronicsList";

export default function Electronics() {
  return (
    <div>
      <div className="flex flex-row gap-3 my-4 justify-center items-center">
        <BackButton />
        <h1 className="text-2xl font-bold">Electronics</h1>
      </div>
      <ElectronicsList />
    </div>
  );
}
