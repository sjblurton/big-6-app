"use client"

import get from "lodash.get"

import { MuiGrid } from "@/modules/components/library/mui"
import useGetWorkoutIds from "@/modules/tanstackQuery/hooks/use-get-workout-ids"

import WorkoutRadioButton from "./WorkoutRadioButton/WorkoutRadioButton"
import WorkoutSkeletonRadios from "./WorkoutSkeletonRadios/WorkoutSkeletonRadios"

import { useCreateFormContextInputs } from "../../hooks/use-create-form-context"
import StepError from "../StepError/StepError"

function WorkoutRadio() {
    const { data, isLoading, error } = useGetWorkoutIds()
    const {
        formState: { errors: formErrors },
    } = useCreateFormContextInputs()

    if (isLoading) {
        return <WorkoutSkeletonRadios />
    }

    if (!data || error) {
        throw new Error("Failed to fetch workout ids", { cause: error })
    }

    const workoutTypeFormError = get(formErrors, "workout.type")

    return (
        <MuiGrid container mt={3} marginInline="auto">
            {data.map(({ _id, ...rest }) => (
                <MuiGrid
                    item
                    container
                    key={_id}
                    xs={6}
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                >
                    <WorkoutRadioButton _id={_id} {...rest} />
                </MuiGrid>
            ))}
            {workoutTypeFormError ? (
                <StepError message="Please select a workout" />
            ) : null}
        </MuiGrid>
    )
}

export default WorkoutRadio
