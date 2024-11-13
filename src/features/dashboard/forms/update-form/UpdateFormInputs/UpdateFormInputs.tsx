"use client"

import React from "react"
import { useFormContext } from "react-hook-form"

import { type UpdateWorkoutDataInput } from "@/@types/forms/forms-types"
import { DatePicker, RepsArray, TextField } from "@/components/form-inputs"
import { MuiButton, MuiGrid } from "@/components/libs/mui"
import { WORKOUT_DETAILS_ARRAY } from "@/constants"
import { LEVELS_ARRAY } from "@/constants/strings/levels-details"

function UpdateFormInputs() {
    const { getValues } = useFormContext<UpdateWorkoutDataInput>()

    return (
        <>
            <MuiGrid item xs={12} sm={6}>
                <TextField<UpdateWorkoutDataInput>
                    label="Workout"
                    name="workout.type"
                    isSelect
                    isFullWidth
                    defaultValue={getValues("workout.type")}
                    options={WORKOUT_DETAILS_ARRAY.map(
                        ({ id: workoutId, title }) => ({
                            label: title,
                            value: workoutId,
                        })
                    )}
                />
            </MuiGrid>

            <MuiGrid item xs={12} sm={6}>
                <TextField<UpdateWorkoutDataInput>
                    label="Level"
                    name="workout.level"
                    isSelect
                    isFullWidth
                    defaultValue={getValues("workout.level")}
                    options={LEVELS_ARRAY.map(({ value, title }) => ({
                        label: title,
                        value: value.toString(),
                    }))}
                />
            </MuiGrid>

            <MuiGrid item>
                <DatePicker />
            </MuiGrid>
            <MuiGrid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
            >
                <RepsArray />
            </MuiGrid>
            <MuiGrid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
            >
                <TextField<UpdateWorkoutDataInput>
                    name="workout.comments"
                    isMultiline
                    label="Comments"
                    isFullWidth
                />
            </MuiGrid>
            <MuiGrid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
            >
                <MuiButton
                    variant="contained"
                    color="secondary"
                    type="submit"
                    fullWidth
                >
                    Submit
                </MuiButton>
            </MuiGrid>
        </>
    )
}

export default UpdateFormInputs
