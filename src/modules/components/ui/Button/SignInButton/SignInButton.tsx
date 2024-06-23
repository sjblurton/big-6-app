"use client";

import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        signIn("google", {
          callbackUrl: "/dashboard",
        });
      }}
    >
      Sign in with google
    </button>
  );
}

export default SignInButton;
