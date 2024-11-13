import { MuiBarChart } from "@/components/libs/mui/muix"
import { secondaryLight } from "@/styles/colors/_exports.module.scss"
import * as background from "@/styles/utility-classes/background.module.scss"
import * as radius from "@/styles/utility-classes/border-radius.module.scss"
import * as boxShadow from "@/styles/utility-classes/box-shadow.module.scss"
import * as width from "@/styles/utility-classes/width.module.scss"

import { wrapper } from "./BarChart.module.scss"

type Properties = {
    reps: { value: number }[]
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
                series={[
                    {
                        data: reps.map(({ value }) => value),
                        color: secondaryLight,
                    },
                ]}
            />
        </div>
    )
}

export default BarChart
