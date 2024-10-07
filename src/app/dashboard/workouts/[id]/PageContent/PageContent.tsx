"use client"

import { DateTime } from "luxon"
import { useParams } from "next/navigation"

import { MuiGrid, MuiTypography } from "@/modules/components/library/mui"
import ProgressBar from "@/modules/components/ui/ProgressBar/ProgressBar"
import { toCapitalizedWords } from "@/modules/strings/transform"

import BarChart from "./BarChart/BarChart"
import Comments from "./Comments/Comments"

import useWorkoutSummery from "../hooks/use-workout-summery"

type Parameters = {
    id: string
}

function PageContent() {
    const { id } = useParams<Parameters>()

    const { step, workout, isLoading, isError, error } = useWorkoutSummery(id)

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError || !workout || !step) {
        throw error || new Error("No data")
    }

    const { date, reps, comments } = workout

    const {
        step: { progressions },
        advanceGoal,
    } = step

    return (
        <MuiGrid container mt={3} mb={1}>
            <MuiGrid
                item
                container
                xs={12}
                justifyContent="center"
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
                justifyContent="center"
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
                justifyContent="center"
                mt={1}
                mb={1}
            >
                <ProgressBar
                    actual={reps.reduce(
                        (accumulator, current) => accumulator + current,
                        0
                    )}
                    goal={advanceGoal}
                />
            </MuiGrid>
            <MuiGrid
                item
                container
                xs={12}
                justifyContent="center"
                mt={1}
                mb={1}
            >
                <BarChart reps={reps} />
            </MuiGrid>
            <MuiGrid
                item
                container
                xs={12}
                justifyContent="center"
                mt={1}
                mb={1}
            >
                <Comments
                    isSeconds={progressions[0].isSeconds}
                    reps={reps}
                    comments={comments}
                />
            </MuiGrid>
        </MuiGrid>
    )
}

export default PageContent
