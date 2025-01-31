import Link from "next/link";
import SignOut from "../_components/SignOut";
import { auth } from "../_lib/auth";
import Image from "next/image";
import SignIn from "../_components/SignIn";

export default async function Profile() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      {session ? (
        <div className="flex items-center justify-center mt-12">
          <div className=" rounded-lg p-4 w-full max-w-sm flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <p className="text-4xl">{user?.name}</p>
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
            <div className="flex mt-2">
              <p>Email:</p>
              <span>{user?.email}</span>
            </div>
            <Link
              href="/settings"
              className="bg-blue-400  h-10 w-56 shadow-md rounded-md flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1  "
            >
              <p>Settings</p>
            </Link>
            <Link
              href="/cart"
              className="bg-blue-400  h-10 w-56 shadow-md rounded-md flex items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 "
            >
              <p>Go to cart</p>
            </Link>
            <SignOut />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6 p-8 rounded-lg mt-12">
          <p className="text-2xl font-bold">You are logged out</p>
          <p className="text-lg">Please sign in to access your profile.</p>
          <SignIn />
        </div>
      )}
    </div>
  );
}
