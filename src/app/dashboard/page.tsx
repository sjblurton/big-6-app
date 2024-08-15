import SignOutButton from "@/modules/components/ui/Button/SignOutButton/SignOutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "../api/auth/authOptions";

async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome user</p>
      <SignOutButton />
    </div>
  );
}

export default Dashboard;
