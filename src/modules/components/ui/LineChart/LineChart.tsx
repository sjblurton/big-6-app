import { DateTime } from "luxon";
import * as background from "@/styles/utilityClasses/background.module.scss";
import * as boxShadow from "@/styles/utilityClasses/boxShadow.module.scss";
import * as radius from "@/styles/utilityClasses/borderRadius.module.scss";
import * as width from "@/styles/utilityClasses/width.module.scss";

import { secondaryLight } from "@/styles/colors/_exports.module.scss";
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import { toCapitalizedWords } from "@/modules/strings/transform";
import { wrapper } from "./LineChart.module.scss";
import { MuiLineChart } from "../../library/mui/muix";

type Props = {
  data: WorkoutData[];
};

export default function LineChart({ data }: Props) {
  const totalRepsPerDay = data.map((day) => ({
    date: day.date,
    totalReps: day.reps.reduce((acc, curr) => acc + curr, 0),
  }));

  const areAllTheSameLevel = data.every((day) => day.level === data[0].level);

  if (!areAllTheSameLevel) {
    throw new Error("All the data must be of the same level.");
  }

  return (
    <div
      className={`${background.light} ${boxShadow.subtle} ${radius.medium} ${width.w90} ${wrapper}`}
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
            label: `level ${data[0].level} ${toCapitalizedWords(data[0].workoutId)}`,
          },
        ]}
      />
    </div>
  );
}
