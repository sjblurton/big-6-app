import { MuiGrid, MuiTypography } from "@/modules/components/library/mui"
import { type ExerciseStep } from "@/modules/cms/client/schemas"

function Progressions({ data }: { data: ExerciseStep["progressions"] }) {
    return (
        <MuiGrid item xs={12} p={1}>
            {data.map(({ _key, stage, isSeconds, reps, sets }) => (
                <MuiTypography key={_key} variant="h6" component="h3">
                    {stage}: {sets} {sets === 1 ? "set" : "sets"} of {reps}{" "}
                    {isSeconds ? "second" : "rep"}
                    {reps === 1 ? "" : "s"}
                </MuiTypography>
            ))}
        </MuiGrid>
    )
}

export default Progressions
