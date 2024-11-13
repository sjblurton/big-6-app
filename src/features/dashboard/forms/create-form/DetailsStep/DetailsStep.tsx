import { type CreateWorkoutDataInput } from "@/@types/forms/forms-types"
import { DatePicker, RepsArray, TextField } from "@/components/form-inputs"
import { MuiGrid } from "@/components/libs/mui"

function DetailsStep() {
    return (
        <MuiGrid container mt={3} marginInline="auto" justifyContent="center">
            <MuiGrid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
            >
                <DatePicker />
            </MuiGrid>
            <MuiGrid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
                mt={2}
            >
                <RepsArray />
            </MuiGrid>
            <MuiGrid
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12}
                mt={2}
            >
                <TextField<CreateWorkoutDataInput>
                    name="workout.comments"
                    isMultiline
                    label="Comments"
                    isFullWidth
                />
            </MuiGrid>
        </MuiGrid>
    )
}

export default DetailsStep
