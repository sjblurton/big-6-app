import React from "react"

import { type CreateWorkoutDataInput } from "@/@types/forms/forms-types"
import RadioButton from "@/components/form-inputs/RadioButton/RadioButton"
import { MuiTypography } from "@/components/libs/mui"

function LevelRadioButton({ level }: { level: string }) {
    return (
        <RadioButton<CreateWorkoutDataInput, "workout.level">
            label={
                <MuiTypography variant="h6" component="h3">
                    {level}
                </MuiTypography>
            }
            value={level}
            name="workout.level"
            size="small"
            selectedLabel={
                <MuiTypography variant="h5" component="h3">
                    {level}
                </MuiTypography>
            }
        />
    )
}

export default LevelRadioButton
