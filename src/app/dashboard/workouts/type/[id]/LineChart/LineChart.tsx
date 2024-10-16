"use client"

import { DateTime } from "luxon"

import { MuiLineChart } from "@/modules/components/library/mui/muix"
import {
    getExerciseNameById,
    type WorkoutData,
} from "@/modules/model/workout/workout-schemas"
import { toCapitalizedWords } from "@/modules/strings/transform"
import { secondaryLight } from "@/styles/colors/_exports.module.scss"
import * as background from "@/styles/utilityClasses/background.module.scss"
import * as radius from "@/styles/utilityClasses/border-radius.module.scss"
import * as boxShadow from "@/styles/utilityClasses/box-shadow.module.scss"
import * as width from "@/styles/utilityClasses/width.module.scss"

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
                        label: `level ${properties.data[0].level} ${toCapitalizedWords(getExerciseNameById(properties.data[0].type))}`,
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
                (accumulator, current) => accumulator + current,
                0
            ),
        }))
        .sort((a, b) => a.date - b.date)
}

export default LineChart
