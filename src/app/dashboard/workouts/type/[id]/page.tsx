import { type Metadata } from "next"

import { type WorkoutTypeIds } from "@/@types/workouts/workout-types"
import { MuiContainer, MuiGrid } from "@/components/libs/mui"
import Timeline from "@/components/server/Timeline/Timeline"
import LineChart from "@/features/dashboard/components/client/LineChart/LineChart"
import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"
import { serverFetchClient } from "@/libs/cms/clients/workouts-fetch-client"
import { createMetadata } from "@/utils/seo/create-metadata"

type Parameters = {
    id: WorkoutTypeIds
}

export async function generateMetadata({
    params: { id },
}: {
    params: Parameters
}): Promise<Metadata> {
    const data = await workoutCmsClient.getExerciseDocument(id)
    return createMetadata({
        title: `${data.name} dashboard`,
        description: `The latest workout data for the ${data.name} exercise.`,
    })
}

async function WorkoutSummery({ params: { id } }: { params: Parameters }) {
    const mockLatestWorkoutData = await serverFetchClient.getWorkoutByType(id)

    return (
        <MuiContainer maxWidth="md" disableGutters>
            <MuiGrid container mt={3} mb={1}>
                <MuiGrid item container xs={12} justifyContent="center">
                    <LineChart data={mockLatestWorkoutData} />
                </MuiGrid>
                <MuiGrid
                    item
                    container
                    xs={12}
                    justifyContent="center"
                    mt={1}
                    mb={10}
                >
                    <Timeline data={mockLatestWorkoutData} />
                </MuiGrid>
            </MuiGrid>
        </MuiContainer>
    )
}

export default WorkoutSummery
