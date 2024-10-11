import { MuiGrid } from "@/modules/components/library/mui"
import DatePicker from "@/modules/components/ui/form-inputs/DatePicker/DatePicker"
import TextField from "@/modules/components/ui/form-inputs/TextField/TextField"
import { type CreateWorkoutDataInput } from "@/modules/model/workout/workout-schemas"

import RepsArray from "./RepsArray/RepsArray"

function DetailsStep() {
    return (
        <MuiGrid
            container
            mt={3}
            spacing={3}
            marginInline="auto"
            justifyContent="center"
        >
            <MuiGrid item xs={12}>
                <DatePicker />
            </MuiGrid>
            <MuiGrid item xs={12}>
                <RepsArray />
            </MuiGrid>
            <MuiGrid item xs={12}>
                <TextField<CreateWorkoutDataInput>
                    name="comments"
                    isMultiline
                    label="Comments"
                    isFullWidth
                />
            </MuiGrid>
        </MuiGrid>
    )
}

export default DetailsStep
