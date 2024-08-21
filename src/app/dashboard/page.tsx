import { Metadata } from "next"
import { createMetadata } from "@/modules/seo/createMetadata"
import { MuiContainer, MuiGrid } from "@/modules/components/library/mui"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { fetchLatestWorkouts } from "@/modules/fetch/workouts"
import WorkoutCard from "@/modules/components/ui/WorkoutCard/WorkoutCard"
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
    const workoutHistory = await fetchLatestWorkouts()
    return (
        <MuiContainer maxWidth="md" disableGutters>
            <MuiGrid container mt={3} mb={1}>
                {workoutHistory.map((workout) => (
                    <MuiGrid
                        item
                        xs={12}
                        key={workout.key}
                        display="flex"
                        alignContent="center"
                        justifyContent="center"
                    >
                        <WorkoutCard workout={workout} />
                    </MuiGrid>
                ))}
            </MuiGrid>
        </MuiContainer>
    )
}

export default Dashboard
