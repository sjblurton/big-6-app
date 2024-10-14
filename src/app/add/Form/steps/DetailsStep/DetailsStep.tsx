import DatePicker from "@/app/add/Form/steps/DetailsStep/DatePicker/DatePicker"
import { MuiGrid } from "@/modules/components/library/mui"
import TextField from "@/modules/components/ui/form-inputs/TextField/TextField"
import { type CreateWorkoutDataInput } from "@/modules/model/workout/workout-schemas"

import RepsArray from "./RepsArray/RepsArray"

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
