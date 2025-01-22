import Link from "next/link";
import SignOut from "../_components/SignOut";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();
  const user = session?.user;
  console.log(user);

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
              href="/setings "
              className="bg-blue-400  h-10 w-56 shadow-md rounded-md flex items-center justify-center "
            >
              <p>Setings</p>
            </Link>
            <Link
              href="cart "
              className="bg-blue-400  h-10 w-56 shadow-md rounded-md flex items-center justify-center "
            >
              <p>Go to cart</p>
            </Link>
            <SignOut />
          </div>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  );
}
