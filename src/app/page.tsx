import { getServerSession } from "next-auth";
import SignOutButton from "@/modules/components/ui/Button/SignOutButton/SignOutButton";
import SignInButton from "@/modules/components/ui/Button/SignInButton/SignInButton";
import authOptions from "./api/auth/authOptions";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome user</p>
        <SignOutButton />
      </div>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome please sign in</p>
      <SignInButton />
    </div>
  );
}
