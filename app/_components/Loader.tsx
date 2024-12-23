import { BarLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <BarLoader color="blue" width={300} height={15} loading={true} />
    </div>
  );
}
