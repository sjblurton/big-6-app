"use client";

import { signOut } from "next-auth/react";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome user</p>
      <button onClick={() => signOut({ callbackUrl: "/" })} type="button">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
