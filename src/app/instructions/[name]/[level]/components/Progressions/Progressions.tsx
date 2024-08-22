import { MuiGrid, MuiTypography } from "@/modules/components/library/mui"
import { Instruction } from "@/modules/model/api/routes/instructions-id/data"

function Progressions({
    advanced,
    beginner,
    intermediate,
}: Instruction["progressions"]) {
    return (
        <MuiGrid item xs={12} p={1}>
            <MuiTypography variant="h6" component="h3">
                Beginner: {beginner.sets} sets of {beginner.reps} reps
            </MuiTypography>
            <MuiTypography variant="h6" component="h3">
                Intermediate: {intermediate.sets} sets of {intermediate.reps}{" "}
                reps
            </MuiTypography>
            <MuiTypography variant="h6" component="h3">
                Advanced: {advanced.sets} sets of {advanced.reps} reps
            </MuiTypography>
        </MuiGrid>
    )
}

export default Progressions
