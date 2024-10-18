import { MuiBarChart } from "@/modules/components/library/mui/muix"
import { secondaryLight } from "@/styles/colors/_exports.module.scss"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as radius from "@/styles/utilityClasses/border-radius.module.scss"
import * as boxShadow from "@/styles/utilityClasses/box-shadow.module.scss"
import * as width from "@/styles/utilityClasses/width.module.scss"

import { wrapper } from "./BarChart.module.scss"

type Properties = {
    reps: number[]
}

function BarChart({ reps }: Properties) {
    return (
        <div
            className={`${background.light} ${boxShadow.subtle} ${radius.medium} ${width.w90} ${wrapper}`}
        >
            <MuiBarChart
                desc="A bar chart showing the number of sets an reps completed for the day."
                xAxis={[
                    {
                        scaleType: "band",
                        data: reps.map((_, index) => `Set: ${index + 1}`),
                    },
                ]}
                series={[{ data: reps, color: secondaryLight }]}
            />
        </div>
    )
}

export default BarChart
