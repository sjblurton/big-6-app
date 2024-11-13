import React from "react"

import { type WorkoutData } from "@/@types/workouts/workout-types"
import { MuiGrid, MuiTypography } from "@/components/libs/mui"

import WorkoutCard from "../WorkoutCard/WorkoutCard"

async function WorkoutCardList({
    workoutData,
}: {
    workoutData: WorkoutData[]
}) {
    return (
        <MuiGrid container mt={3} mb={1}>
            {workoutData.length > 0 ? (
                workoutData.map((workout) => (
                    <MuiGrid
                        item
                        xs={12}
                        key={workout.id}
                        display="flex"
                        alignContent="center"
                        justifyContent="center"
                    >
                        <WorkoutCard workout={workout} />
                    </MuiGrid>
                ))
            ) : (
                <MuiGrid
                    item
                    xs={12}
                    display="flex"
                    alignContent="center"
                    justifyContent="center"
                >
                    <MuiTypography variant="h4" component="h2">
                        You have not yet logged any workouts
                    </MuiTypography>
                </MuiGrid>
            )}
        </MuiGrid>
    )
}

export default WorkoutCardList
