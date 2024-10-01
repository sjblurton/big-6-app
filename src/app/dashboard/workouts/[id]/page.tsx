import { DateTime } from "luxon"
import { type Metadata } from "next"

import { CmsClient } from "@/modules/cms/client/client"
import {
    MuiContainer,
    MuiGrid,
    MuiTypography,
} from "@/modules/components/library/mui"
import ProgressBar from "@/modules/components/ui/ProgressBar/ProgressBar"
import { type WorkoutData } from "@/modules/model/workout/workout-schemas"
import { createMetadata } from "@/modules/seo/create-metadata"
import { toCapitalizedWords } from "@/modules/strings/transform"

import BarChart from "./BarChart/BarChart"
import Comments from "./Comments/Comments"

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

async function WorkoutSummery({ params: { id } }: { params: Params }) {
    const { date, reps, type, level, comments }: WorkoutData = await fetch(
        `http://localhost:3000/api/v1/workouts/${id}`,
        { cache: "no-store" }
    ).then((res) => res.json())

    const { step } = await CmsClient.getExerciseStep(type, level)

    const advanceGoal = CmsClient.getAdvanceGoal(step.progressions)

    return (
        <MuiContainer maxWidth="md" disableGutters>
            <MuiGrid container mt={3} mb={1}>
                <MuiGrid
                    item
                    container
                    xs={12}
                    justifyContent={"center"}
                    mt={1}
                    mb={1}
                >
                    <MuiTypography variant="h4" component="h2">
                        {toCapitalizedWords(step.name)}
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid
                    item
                    container
                    xs={12}
                    justifyContent={"center"}
                    mt={1}
                    mb={1}
                >
                    <MuiTypography variant="h3" component="h3" mt={1} mb={1}>
                        {DateTime.fromMillis(date).toRelativeCalendar()}
                    </MuiTypography>
                </MuiGrid>
                <MuiGrid
                    item
                    container
                    xs={12}
                    justifyContent={"center"}
                    mt={1}
                    mb={1}
                >
                    <ProgressBar
                        actual={reps.reduce((acc, curr) => acc + curr, 0)}
                        goal={advanceGoal}
                    />
                </MuiGrid>
                <MuiGrid
                    item
                    container
                    xs={12}
                    justifyContent={"center"}
                    mt={1}
                    mb={1}
                >
                    <BarChart reps={reps} />
                </MuiGrid>
                <MuiGrid
                    item
                    container
                    xs={12}
                    justifyContent={"center"}
                    mt={1}
                    mb={1}
                >
                    <Comments
                        isSeconds={step.progressions[0].isSeconds}
                        reps={reps}
                        comments={comments}
                    />
                </MuiGrid>
            </MuiGrid>
        </MuiContainer>
    )
}

export default WorkoutSummery
