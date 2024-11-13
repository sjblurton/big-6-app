import { type Metadata } from "next"

import { MuiContainer } from "@/components/libs/mui"
import WorkoutByIdPageContent from "@/features/dashboard/components/client/WorkoutByIdPageContent/WorkoutByIdPageContent"
import { serverFetchClient } from "@/libs/cms/clients/workouts-fetch-client"
import { createMetadata } from "@/utils/seo/create-metadata"

type Parameters = {
    id: string
}

export async function generateMetadata({
    params: { id },
}: {
    params: Parameters
}): Promise<Metadata> {
    return createMetadata({
        title: `Document: ${id}`,
        description: `The latest workout data for the ${id} exercise.`,
    })
}

async function WorkoutSummery({ params: { id } }: { params: Parameters }) {
    const workoutSummery = await serverFetchClient.getWorkoutSummery(id)

    return (
        <MuiContainer maxWidth="md" disableGutters>
            <WorkoutByIdPageContent workoutSummery={workoutSummery} />
        </MuiContainer>
    )
}

export default WorkoutSummery
