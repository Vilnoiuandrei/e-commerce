import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();
  const user = session?.user;
  console.log("user", user);

  return (
    <div className="flex items-center justify-center border-solid border-red-500">
      <div className="border border-gray-300 rounded-lg p-4 w-full max-w-sm mt-12">
        <div className="flex items-center space-x-4 ">
          <p className="text-4xl ">{user?.name}</p>
          {user?.image && (
            <Image
              src={user.image}
              alt={`${user.name}'s profile picture`}
              width={96}
              height={96}
              className="rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}
