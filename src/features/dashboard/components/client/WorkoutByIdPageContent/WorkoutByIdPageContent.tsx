"use client"

import { DateTime } from "luxon"
import { useRouter } from "next/navigation"

import ProgressBar from "@/components/client/ProgressBar/ProgressBar"
import {
    MuiFloatingActionButton,
    MuiGrid,
    MuiTypography,
} from "@/components/libs/mui"
import { MuiModeEditIcon } from "@/components/libs/mui/mui-icons"
import { type FetchWorkOutSummery } from "@/libs/cms/clients/workouts-fetch-client"
import { toCapitalizedWords } from "@/utils/strings/transform"

import BarChart from "../../server/BarChart/BarChart"
import Comments from "../../server/Comments/Comments"

function WorkoutByIdPageContent({
    workoutSummery,
}: {
    workoutSummery: FetchWorkOutSummery
}) {
    const router = useRouter()

    const {
        workout: { date, reps, comments, id },
        step: {
            advanceGoal,
            step,
            step: { progressions },
        },
    } = workoutSummery

    return (
        <MuiGrid container mt={3} mb={1} justifyContent="center">
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
                sm={8}
                md={4}
                justifyContent="center"
                mt={1}
                mb={1}
            >
                <MuiGrid item container xs={6} justifyContent="center">
                    <ProgressBar
                        actual={reps.reduce(
                            (accumulator, current) =>
                                accumulator + current.value,
                            0
                        )}
                        goal={advanceGoal}
                    />
                </MuiGrid>
                <MuiGrid
                    item
                    container
                    xs={6}
                    md={4}
                    justifyContent="center"
                    alignItems="center"
                >
                    <MuiFloatingActionButton
                        color="secondary"
                        onClick={() => {
                            router.push(`/dashboard/workouts/${id}/update`)
                        }}
                    >
                        <MuiModeEditIcon />
                    </MuiFloatingActionButton>
                </MuiGrid>
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

export default WorkoutByIdPageContent
