import { type Metadata } from "next"
import { MuiContainer, MuiGrid } from "@/modules/components/library/mui"
import { createMetadata } from "@/modules/seo/create-metadata"

type Params = {
    id: string
}

export async function generateMetadata({
    params: { id },
}: {
    params: Params
}): Promise<Metadata> {
    return createMetadata({
        title: `Document: ${id}`,
        description: `The latest workout data for the ${id} exercise.`,
    })
}

async function WorkoutSummery() {
    // { params: { id } }: { params: Params }
    // const mockLatestWorkoutData: WorkoutData[] = await fetch(
    //     `http://localhost:3000/api/v1/workouts/${id}`,
    //     { cache: "no-store" }
    // ).then((res) => res.json())

    return (
        <MuiContainer maxWidth="md" disableGutters>
            <MuiGrid container mt={3} mb={1}>
                hello world
                {/* <MuiGrid item container xs={12} justifyContent={"center"}>
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
                </MuiGrid> */}
            </MuiGrid>
        </MuiContainer>
    )
}

export default WorkoutSummery
