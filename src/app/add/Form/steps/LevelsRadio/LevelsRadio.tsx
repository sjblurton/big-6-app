"use client"
import get from "lodash.get"
import { v4 as UUIDv4 } from "uuid"

import { MuiGrid } from "@/modules/components/library/mui"

import LevelRadioButton from "./LevelRadioButton/LevelRadioButton"

import { useCreateFormContextInputs } from "../../hooks/use-create-form-context"
import StepError from "../StepError/StepError"

const levelsKeysAndValues = Array.from({ length: 10 }).map((_, index) => ({
    key: UUIDv4(),
    value: (index + 1).toString(),
}))

function LevelsRadio() {
    const {
        formState: { errors: formErrors },
    } = useCreateFormContextInputs()

    const workoutLevelFormError = get(formErrors, "workout.level")
    return (
        <MuiGrid container mt={3} marginInline="auto" justifyContent="center">
            {levelsKeysAndValues.map(({ key, value }) => (
                <MuiGrid
                    item
                    key={key}
                    xs={4}
                    mt={2}
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    <LevelRadioButton level={value} />
                </MuiGrid>
            ))}
            {workoutLevelFormError ? (
                <StepError message="Please select a level" />
            ) : null}
        </MuiGrid>
    )
}

export default LevelsRadio
