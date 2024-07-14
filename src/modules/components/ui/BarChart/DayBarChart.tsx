import { secondaryLight } from "@/styles/colors/_exports.module.scss";
import * as background from "@/styles/utilityClasses/background.module.scss";
import * as box from "@/styles/utilityClasses/boxShadow.module.scss";
import * as radius from "@/styles/utilityClasses/borderRadius.module.scss";

import { MuiBarChart } from "../library/muix";

type Props = {
  reps: number[];
};

export default function DayBarChart({ reps }: Props) {
  return (
    <div
      className={`${background.light} ${box.shadow} ${radius.medium}`}
      style={{ width: "90%", height: 250, maxWidth: 600 }}
    >
      <MuiBarChart
        desc="A bar chart showing the number of sets an reps completed for the day."
        xAxis={[
          { scaleType: "band", data: reps.map((_, i) => `Set: ${i + 1}`) },
        ]}
        series={[{ data: reps, color: secondaryLight }]}
      />
    </div>
  );
}