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

import { workoutOverviewSchema } from "@/modules/model/api/routes/instructions-id/outputs/workoutInstructionsSchema";
import { MuiTypography } from "../../library/mui";
import { workoutSvgs } from "../../assets/workouts";

type InstructionsOverviewCardProps = {
  workoutId: WorkoutIds;
};

const getData = async (id: WorkoutIds) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/docs/instructions/${id}`,
  );

  const data = await workoutOverviewSchema.parseAsync(await res.json());

  return data;
};

async function InstructionsOverviewCard({
  workoutId,
}: InstructionsOverviewCardProps) {
  const { component: TitleSvg, title } = workoutSvgs[workoutId];
  const { description, levelNames } = await getData(workoutId);

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

      <MuiTypography style={{ flex: 2 }}>{description}</MuiTypography>

      <ul style={{ width: "100%" }}>
        {levelNames.map((content) => (
          <li key={content}>
            <MuiTypography
              style={{ flex: 1 }}
              variant="h5"
              component="h3"
              width="100%"
            >
              {content}
            </MuiTypography>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default InstructionsOverviewCard;
