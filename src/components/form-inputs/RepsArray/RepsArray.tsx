"use client"

import get from "lodash.get"
import { useState } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"

import { type CreateWorkoutDataInput } from "@/@types/forms/forms-types"
import {
    MuiDivider,
    MuiFloatingActionButton,
    MuiGrid,
    MuiTextField,
    MuiTypography,
} from "@/components/libs/mui"
import { MuiAddIcon } from "@/components/libs/mui/mui-icons"
import { repsSchema } from "@/schemas/workouts"

import SetField from "./SetField/SetField"

import { textFieldStyles } from "../TextField/TextField"

const name = "workout.reps"

function RepsArray() {
    const [currentReps, setCurrentReps] = useState<number>(0)
    const {
        control,
        setError,
        formState: { errors },
        clearErrors,
    } = useFormContext<CreateWorkoutDataInput>()
    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const repsError = get(errors, name)

    const handleAddSet = () => {
        const safe = repsSchema.safeParse({ value: currentReps })
        if (!safe.success) {
            setError(name, {
                type: "manual",
                message: safe.error.issues[0].message,
            })
            return
        }
        clearErrors(name)
        setCurrentReps(0)
        append(safe.data)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value)
        const safe = repsSchema.safeParse({ value })
        if (!safe.success) {
            return
        }
        setCurrentReps(value)
    }

    return (
        <>
            <MuiGrid container item xs={12}>
                <MuiTypography variant="h6">Reps</MuiTypography>
            </MuiGrid>
            {fields.map(({ id, value }, index) => (
                <SetField
                    key={id}
                    index={index}
                    value={value}
                    onRemove={() => remove(index)}
                />
            ))}
            <MuiGrid
                item
                container
                justifyContent="right"
                alignItems="center"
                mt={1}
                flexWrap="nowrap"
            >
                <MuiTextField
                    label={
                        fields.length === 0 ? "Add a Set" : "Add Another Set"
                    }
                    sx={textFieldStyles}
                    variant="filled"
                    size="small"
                    type="number"
                    value={currentReps}
                    onChange={handleChange}
                    error={Boolean(repsError)}
                    helperText={repsError?.message}
                />

                <MuiFloatingActionButton
                    color="secondary"
                    aria-label="add"
                    size="small"
                    onClick={handleAddSet}
                >
                    <MuiAddIcon style={{ color: "white" }} />
                </MuiFloatingActionButton>
            </MuiGrid>
            <MuiDivider
                flexItem
                variant="fullWidth"
                sx={{
                    mt: 1,
                    color: "white",
                    width: "100%",
                    borderColor: "white",
                    "&::before, &::after": {
                        borderColor: "white",
                    },
                }}
            />
        </>
    )
}

export default RepsArray
