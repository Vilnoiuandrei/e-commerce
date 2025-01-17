import SignOut from "../_components/SignOut";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();
  const user = session?.user;
  console.log("user", user);

  return (
    <div>
      {session ? (
        <div className="flex items-center justify-center mt-12">
          <div className="border-8 border-gray-300 rounded-lg p-4 w-full max-w-sm flex flex-col items-center space-y-4">
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
            <SignOut />
          </div>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  );
}
