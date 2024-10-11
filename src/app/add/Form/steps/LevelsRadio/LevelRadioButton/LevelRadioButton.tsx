import React from "react"

import { MuiTypography } from "@/modules/components/library/mui"
import RadioButton from "@/modules/components/ui/form-inputs/RadioButton/RadioButton"
import { type CreateWorkoutDataInput } from "@/modules/model/workout/workout-schemas"

function LevelRadioButton({ level }: { level: string }) {
    return (
        <RadioButton<CreateWorkoutDataInput, "level">
            label={
                <MuiTypography variant="h6" component="h3">
                    {level}
                </MuiTypography>
            }
            value={level}
            name="level"
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
