"use client"

import { DateTime } from "luxon"

import { type WorkoutData } from "@/@types/workouts/workout-types"
import { MuiLineChart } from "@/components/libs/mui/muix"
import { getWorkoutNameById } from "@/features/dashboard/utils/get-workout-name-by-id"
import { secondaryLight } from "@/styles/colors/_exports.module.scss"
import * as background from "@/styles/utility-classes/background.module.scss"
import * as radius from "@/styles/utility-classes/border-radius.module.scss"
import * as boxShadow from "@/styles/utility-classes/box-shadow.module.scss"
import * as width from "@/styles/utility-classes/width.module.scss"
import { toCapitalizedWords } from "@/utils/strings/transform"

import { wrapper } from "./LineChart.module.scss"

type Properties = {
    data: WorkoutData[]
}

function LineChart(properties: Properties) {
    const lineChartData = getLineChartData(properties.data)

    return (
        <div
            className={`${background.light} ${boxShadow.subtle} ${radius.medium} ${width.w90} ${wrapper}`}
        >
            <MuiLineChart
                data-testid="mui-line-chart"
                xAxis={[
                    {
                        data: lineChartData.map((day) => new Date(day.date)),
                        tickInterval: lineChartData.map(
                            (day) => new Date(day.date)
                        ),
                        scaleType: "time",
                        valueFormatter: (date: Date) =>
                            DateTime.fromJSDate(date).toFormat("LLL d"),
                    },
                ]}
                yAxis={[{ label: "Reps" }]}
                series={[
                    {
                        data: lineChartData.map((day) => day.totalReps),
                        color: secondaryLight,
                        label: `level ${properties.data[0].level} ${toCapitalizedWords(getWorkoutNameById(properties.data[0].type))}`,
                    },
                ]}
            />
        </div>
    )
}

function getLineChartData(data: WorkoutData[]) {
    const mostRecentDate = Math.max(...data.map((workout) => workout.date))

    const mostRecentData = data.find(
        (workout) => workout.date === mostRecentDate
    )

    const level = mostRecentData?.level

    return data
        .filter((workout) => workout.level === level)
        .map((workout) => ({
            date: workout.date,
            totalReps: workout.reps.reduce(
                (accumulator, current) => accumulator + current.value,
                0
            ),
        }))
        .sort((a, b) => a.date - b.date)
}

export default LineChart
