import { type Metadata } from "next"

import exerciseCmsClient from "@/modules/cms/client/exercise/exercise-client"
import { MuiContainer, MuiGrid } from "@/modules/components/library/mui"
import Timeline from "@/modules/components/ui/Timeline/Timeline"
import {
    type WorkoutData,
    type WorkoutTypeIds,
} from "@/modules/model/workout/workout-schemas"
import { createMetadata } from "@/modules/seo/create-metadata"

import LineChart from "./LineChart/LineChart"

type Params = {
    id: WorkoutTypeIds
}

export async function generateMetadata({
    params: { id },
}: {
    params: Params
}): Promise<Metadata> {
    const data = await exerciseCmsClient.getExerciseDocument(id)
    return createMetadata({
        title: `${data.name} dashboard`,
        description: `The latest workout data for the ${data.name} exercise.`,
    })
}

async function WorkoutSummery({ params: { id } }: { params: Params }) {
    const mockLatestWorkoutData: WorkoutData[] = await fetch(
        `http://localhost:3000/api/v1/workouts/types/${id}`,
        { cache: "no-store" }
    ).then((res) => res.json())

    return (
        <MuiContainer maxWidth="md" disableGutters>
            <MuiGrid container mt={3} mb={1}>
                <MuiGrid item container xs={12} justifyContent={"center"}>
                    <LineChart data={mockLatestWorkoutData} />
                </MuiGrid>
                <MuiGrid
                    item
                    container
                    xs={12}
                    justifyContent={"center"}
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
