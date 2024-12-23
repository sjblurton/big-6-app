import { type ExerciseStep } from "@/@types/cms/cms-types"
import { MuiGrid, MuiTypography } from "@/components/libs/mui"
import { toCapitalizedWords } from "@/utils/strings/transform"

function Progressions({ data }: { data: ExerciseStep["progressions"] }) {
    return (
        <MuiGrid item xs={12} p={1}>
            {data.map(({ _key, stage, isSeconds, reps, sets }) => (
                <MuiGrid
                    key={_key}
                    sm={12}
                    container
                    justifyContent="space-between"
                >
                    <MuiTypography
                        variant="h6"
                        component="h3"
                        display="inline-block"
                    >
                        {toCapitalizedWords(stage)}:
                    </MuiTypography>
                    <MuiTypography
                        variant="body1"
                        component="p"
                        display="inline-block"
                        textAlign="right"
                    >
                        {sets} {sets === 1 ? "set" : "sets"} of {reps}{" "}
                        {isSeconds ? "second" : "rep"}
                        {reps === 1 ? "" : "s"}
                    </MuiTypography>
                </MuiGrid>
            ))}
        </MuiGrid>
    )
}

export default Progressions
