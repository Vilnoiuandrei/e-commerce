"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      className="bg-customLight text-customDark mt-3 h-10 w-24 shadow-md rounded-sm"
      onClick={() => signIn("google", { redirectTo: "/profile" })}
    >
      Sign In
    </button>
  );
}
