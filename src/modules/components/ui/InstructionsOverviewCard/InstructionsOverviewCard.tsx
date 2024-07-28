import React from "react";
import * as flex from "@/styles/utilityClasses/flex.module.scss";
import * as margin from "@/styles/utilityClasses/margin.module.scss";
import * as padding from "@/styles/utilityClasses/padding.module.scss";
import * as shadow from "@/styles/utilityClasses/boxShadow.module.scss";
import * as width from "@/styles/utilityClasses/width.module.scss";
import * as maxWidth from "@/styles/utilityClasses/maxWidth.module.scss";
import * as borderRadius from "@/styles/utilityClasses/borderRadius.module.scss";
import * as background from "@/styles/utilityClasses/background.module.scss";
import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs";

import { MuiTypography } from "../../library/mui";
import { workoutSvgs } from "../../assets/workouts";

type InstructionsOverviewCardProps = {
  workoutId: WorkoutIds;
};

function InstructionsOverviewCard({
  workoutId,
}: InstructionsOverviewCardProps) {
  const { component: TitleSvg, title } = workoutSvgs[workoutId];

  return (
    <article
      className={[
        margin.auto,
        background.light,
        borderRadius.medium,
        padding.p2,
        shadow.subtle,
        width.w90,
        maxWidth.large,
        flex.center,
        flex.column,
        flex.gap2,
      ].join(" ")}
    >
      <div className={[padding.p2, maxWidth.medium, margin.auto].join(" ")}>
        <TitleSvg height={150} />
      </div>

      <MuiTypography variant="h3" component="h2" width="100%">
        {title}
      </MuiTypography>

      <MuiTypography style={{ flex: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo nemo
        quidem reprehenderit. Nesciunt obcaecati facilis, magnam placeat
        perspiciatis ea vitae! Earum voluptatibus placeat fuga nobis quis
        dolore. At, reiciendis!
      </MuiTypography>

      <ul style={{ width: "100%" }}>
        {new Array(10).fill(1).map((content, i) => (
          <li key={(content + i).toString()}>
            <MuiTypography
              style={{ flex: 1 }}
              variant="h5"
              component="h3"
              width="100%"
            >
              Item number {i + 1}
            </MuiTypography>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default InstructionsOverviewCard;
