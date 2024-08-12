import { InstructionParams } from "@/modules/api/instructions/services/instructions.service";
import {
  MuiContainer,
  MuiGrid,
  MuiTypography,
} from "@/modules/components/library/mui";
import InstructionsCard from "@/modules/components/ui/InstructionsCard/InstructionsCard";
import InstructionsTitle from "@/modules/components/ui/InstructionsTitle/InstructionsTitle";
import { levelArray } from "@/modules/model/api/routes/instructions-id-level/constants/levels";
import { Instruction } from "@/modules/model/api/routes/instructions-id/data";
import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workoutIds";
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
      <MuiGrid container mt={4}>
        <MuiGrid item xs={12}>
          <InstructionsTitle params={params} />
        </MuiGrid>
        <MuiGrid item xs={12} p={1}>
          <MuiTypography variant="h6" component="h2">
            Progressions
          </MuiTypography>
        </MuiGrid>
        <MuiGrid item xs={12} p={1}>
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
        </MuiGrid>
        <MuiGrid item xs={12} pb={1} pt={1}>
          <InstructionsCard
            directions={directions.positive}
            workoutKey={workoutId}
            level={level}
            isPositive
            name={name}
          />
        </MuiGrid>
        <MuiGrid item xs={12} pb={1}>
          <InstructionsCard
            directions={directions.negative}
            workoutKey={workoutId}
            level={level}
            isPositive={false}
            name={name}
          />
        </MuiGrid>
      </MuiGrid>
    </MuiContainer>
  );
}

export default WorkoutInstructionsPage;
