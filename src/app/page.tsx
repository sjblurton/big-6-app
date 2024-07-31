import { getServerSession } from "next-auth";
import SignOutButton from "@/modules/components/ui/Button/SignOutButton/SignOutButton";
import SignInButton from "@/modules/components/ui/Button/SignInButton/SignInButton";
import authOptions from "./api/auth/authOptions";

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
