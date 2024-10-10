"use client"

import { MuiGrid } from "@/modules/components/library/mui"
import useGetWorkoutIds from "@/modules/tanstackQuery/hooks/use-get-workout-ids"

import WorkoutRadioButton from "./WorkoutRadioButton/WorkoutRadioButton"
import WorkoutSkeletonRadios from "./WorkoutSkeletonRadios/WorkoutSkeletonRadios"

function WorkoutRadio() {
    const { data, isLoading, error } = useGetWorkoutIds()

    if (isLoading) {
        return <WorkoutSkeletonRadios />
    }

    if (!data || error) {
        throw new Error("Failed to fetch workout ids", { cause: error })
    }

    return (
        <MuiGrid container spacing={3} mt={3} marginInline="auto">
            {data.map(({ _id, ...rest }) => (
                <MuiGrid
                    item
                    key={_id}
                    xs={6}
                    justifyContent="center"
                    alignItems="center"
                >
                    <WorkoutRadioButton _id={_id} {...rest} />
                </MuiGrid>
            ))}
        </MuiGrid>
    )
}

export default WorkoutRadio
