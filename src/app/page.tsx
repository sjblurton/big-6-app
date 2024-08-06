import { getServerSession } from "next-auth";
import SignOutButton from "@/modules/components/ui/Button/SignOutButton/SignOutButton";
import SignInButton from "@/modules/components/ui/Button/SignInButton/SignInButton";
import type { Metadata } from "next";
import authOptions from "./api/auth/authOptions";

export const metadata: Metadata = {
  title: "Big 6 Callisthenics | Home",
  description:
    "Progressive callisthenics app based on the book; Convict Conditioning. Track your progress, and keep your focus as you master the Big 6 callisthenics movements!",
};

const getData = async () => {
  const res = await fetch(
    "http://localhost:3000/api/v1/docs/instructions/pull-ups",
  );
  const data = await res.json();
  return data;
};

export default async function HomePage() {
  const data = await getData();
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome user</p>
        <SignOutButton />
        <div>{JSON.stringify(data, null, 2)}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome please sign in</p>
      <SignInButton />
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}
