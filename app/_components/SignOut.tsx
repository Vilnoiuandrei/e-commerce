"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="bg-blue-400   h-10 w-56 shadow-md rounded-md "
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
