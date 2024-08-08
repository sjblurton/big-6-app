import { InstructionParams } from "@/modules/api/instructions/services/instructions.service";
import { MuiContainer, MuiTypography } from "@/modules/components/library/mui";
import InstructionsCard from "@/modules/components/ui/InstructionsCard/InstructionsCard";
import { levelArray } from "@/modules/model/api/routes/instructions-id-level/constants/levels";
import { Instruction } from "@/modules/model/api/routes/instructions-id/data";
import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workoutIds";
import {
  pathLevelToTitleString,
  workoutIdToTitleString,
} from "@/modules/strings/transform";
import { Grid } from "@mui/material";
import { GetStaticPaths } from "next";

const paths = WORKOUT_ID_LIST.flatMap((name) =>
  levelArray.map((level) => ({ params: { name, level } })),
);

export const getStaticPaths = (async () => ({
  paths,
  fallback: false,
})) satisfies GetStaticPaths;

async function getWorkoutInstructionsPageData({
  level,
  name,
}: InstructionParams) {
  const res = await fetch(
    `http://localhost:3000/api/v1/docs/instructions/${name}/${level}`,
  );

  const data: Instruction = await res.json();

  return data;
}

async function WorkoutInstructionsPage({
  params,
}: {
  params: Required<InstructionParams>;
}) {
  const { directions, level, name, progressions, workoutId } =
    await getWorkoutInstructionsPageData(params);
  return (
    <MuiContainer maxWidth="sm" disableGutters>
      <Grid container mt={4}>
        <Grid item xs={12}>
          <MuiTypography variant="h1" textAlign="center">
            {workoutIdToTitleString(params.name)} |{" "}
            {pathLevelToTitleString(params.level)}
          </MuiTypography>
        </Grid>
        <Grid item xs={12} p={1}>
          <MuiTypography variant="h6" component="h2">
            Progressions
          </MuiTypography>
        </Grid>
        <Grid item xs={12} p={1}>
          <MuiTypography variant="h6" component="h3">
            Beginner: {progressions.beginner.sets} sets of{" "}
            {progressions.beginner.reps} reps
          </MuiTypography>
          <MuiTypography variant="h6" component="h3">
            Intermediate: {progressions.intermediate.sets} sets of{" "}
            {progressions.intermediate.reps} reps
          </MuiTypography>
          <MuiTypography variant="h6" component="h3">
            Advanced: {progressions.advanced.sets} sets of{" "}
            {progressions.advanced.reps} reps
          </MuiTypography>
        </Grid>
        <Grid item xs={12} pb={1} pt={1}>
          <InstructionsCard
            directions={directions.positive}
            workoutKey={workoutId}
            level={level}
            isPositive
            name={name}
          />
        </Grid>
        <Grid item xs={12} pb={1}>
          <InstructionsCard
            directions={directions.negative}
            workoutKey={workoutId}
            level={level}
            isPositive={false}
            name={name}
          />
        </Grid>
      </Grid>
    </MuiContainer>
  );
}

export default WorkoutInstructionsPage;
