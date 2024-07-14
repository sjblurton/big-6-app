import { DateTime } from "luxon";
import * as background from "@/styles/utilityClasses/background.module.scss";
import * as box from "@/styles/utilityClasses/boxShadow.module.scss";
import * as radius from "@/styles/utilityClasses/borderRadius.module.scss";
import * as width from "@/styles/utilityClasses/width.module.scss";

import { secondaryLight } from "@/styles/colors/_exports.module.scss";
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import { wrapper } from "./MonthlyLineChart.module.scss";
import { MuiLineChart } from "../library/muix";

type Props = {
  data: WorkoutData[];
};

export default function MonthlyLineChart({ data }: Props) {
  const totalRepsPerDay = data.map((day) => ({
    date: day.date,
    totalReps: day.reps.reduce((acc, curr) => acc + curr, 0),
  }));

  return (
    <div
      className={`${background.light} ${box.shadow} ${radius.medium} ${width.w90} ${wrapper}`}
    >
      <MuiLineChart
        xAxis={[
          {
            data: totalRepsPerDay.map((day) => day.date),
            scaleType: "time",
            valueFormatter: (date: Date) =>
              DateTime.fromJSDate(date).toFormat("LLL d"),
          },
        ]}
        series={[
          {
            data: totalRepsPerDay.map((day) => day.totalReps),
            color: secondaryLight,
          },
        ]}
        height={250}
      />
    </div>
  );
}
