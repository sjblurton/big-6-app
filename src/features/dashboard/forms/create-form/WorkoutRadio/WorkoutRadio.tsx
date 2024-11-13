"use client"

import get from "lodash.get"

import { MuiGrid } from "@/components/libs/mui"

import WorkoutRadioButton from "./WorkoutRadioButton/WorkoutRadioButton"

import { useCreateFormContextInputs } from "../hooks/use-create-form-context"
import StepError from "../StepError/StepError"

function WorkoutRadio() {
    const {
        getValues,
        formState: { errors: formErrors },
    } = useCreateFormContextInputs()

    const workoutIds = getValues("meta.workoutIds")

    const workoutTypeFormError = get(formErrors, "workout.type")

    return (
        <MuiGrid container mt={3} marginInline="auto">
            {workoutIds.map(({ _id, ...rest }) => (
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
            {workoutTypeFormError && (
                <StepError message="Please select a workout" />
            )}
        </MuiGrid>
    )
}

export default WorkoutRadio
