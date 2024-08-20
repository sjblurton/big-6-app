import SignOutButton from "@/modules/components/ui/Button/SignOutButton/SignOutButton"
import { Metadata } from "next"
import { createMetadata } from "@/modules/seo/createMetadata"
import { MuiContainer } from "@/modules/components/library/mui"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { fetchWorkouts } from "@/modules/fetch/workouts"
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
    const workoutHistory = await fetchWorkouts()

    return (
        <MuiContainer maxWidth="md" disableGutters>
            <h1>Dashboard</h1>
            <p>{JSON.stringify(workoutHistory, null, 2)}</p>
            <SignOutButton />
        </MuiContainer>
    )
}

export default Dashboard
