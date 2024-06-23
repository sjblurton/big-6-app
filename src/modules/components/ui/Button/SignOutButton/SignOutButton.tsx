"use client";

import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      Sign out
    </button>
  );
}

export default SignOutButton;
