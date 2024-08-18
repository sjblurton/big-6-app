import SignOutButton from "@/modules/components/ui/Button/SignOutButton/SignOutButton"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { Metadata } from "next"
import { createMetadata } from "@/modules/seo/createMetadata"
import authOptions from "../api/auth/authOptions"

export const metadata: Metadata = createMetadata({
    title: "Dashboard",
    description: "Dashboard for the Big 6 Callisthenics Training Log Book.",
})

async function Dashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/")
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome user</p>
            <SignOutButton />
        </div>
    )
}

export default Dashboard
