import { type Metadata } from "next"

import { MuiContainer } from "@/components/libs/mui"
import WorkoutCardList from "@/features/dashboard/components/server/WorkoutCardList/WorkoutCardList"
import { serverFetchClient } from "@/libs/cms/clients/workouts-fetch-client"
import { createMetadata } from "@/utils/seo/create-metadata"

export const metadata: Metadata = createMetadata({
    title: "Dashboard",
    description: "Dashboard for the Big 6 Calisthenics Training Log Book.",
})

async function Dashboard() {
    const workoutData = await serverFetchClient.getWorkouts()

    return (
        <MuiContainer maxWidth="md" disableGutters>
            <WorkoutCardList workoutData={workoutData} />
        </MuiContainer>
    )
}

export default Dashboard
