import get from "lodash.get"
import { useState } from "react"
import { useFieldArray, useFormContext } from "react-hook-form"

import {
    MuiFloatingActionButton,
    MuiGrid,
    MuiTextField,
} from "@/modules/components/library/mui"
import { MuiAddIcon } from "@/modules/components/library/mui/mui-icons"
import { textFieldStyles } from "@/modules/components/ui/form-inputs/TextField/TextField"
import {
    type CreateWorkoutDataInput,
    repsSchema,
} from "@/modules/model/workout/workout-schemas"

import SetField from "./SetField/SetField"

function RepsArray() {
    const [currentReps, setCurrentReps] = useState<number>(0)
    const {
        control,
        setError,
        formState: { errors },
        clearErrors,
    } = useFormContext<CreateWorkoutDataInput>()
    const { fields, append, remove } = useFieldArray({
        name: "reps",
        control,
    })

    const repsError = get(errors, "reps")

    const handleAddSet = () => {
        const safe = repsSchema.safeParse(currentReps)
        if (!safe.success) {
            setError("reps", {
                type: "manual",
                message: safe.error.issues[0].message,
            })
            return
        }
        clearErrors("reps")
        setCurrentReps(0)
        append({ value: safe.data })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value)
        const safe = repsSchema.safeParse(value)
        if (!safe.success) {
            return
        }
        setCurrentReps(value)
    }

    return (
        <>
            {fields.map(({ id, value }, index) => (
                <SetField
                    key={id}
                    index={index}
                    value={value}
                    onRemove={() => remove(index)}
                />
            ))}
            <MuiGrid item container justifyContent="space-between" mt={1}>
                <MuiGrid item xs={10}>
                    <MuiTextField
                        fullWidth
                        label={
                            fields.length === 0
                                ? "Add a Set"
                                : "Add Another Set"
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
                </MuiGrid>
                <MuiGrid item display="flex" alignItems="center">
                    <MuiFloatingActionButton
                        color="secondary"
                        aria-label="add"
                        size="small"
                        onClick={handleAddSet}
                    >
                        <MuiAddIcon style={{ color: "white" }} />
                    </MuiFloatingActionButton>
                </MuiGrid>
            </MuiGrid>
        </>
    )
}

export default RepsArray
