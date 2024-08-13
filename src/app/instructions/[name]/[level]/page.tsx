import { InstructionParams } from "@/modules/api/instructions/services/instructions.service";
import {
  MuiButton,
  MuiContainer,
  MuiGrid,
  MuiTypography,
} from "@/modules/components/library/mui";
import * as colors from "@/styles/colors/_exports.module.scss";
import InstructionsCard from "@/modules/components/ui/InstructionsCard/InstructionsCard";
import InstructionsDropdownTitle from "@/modules/components/ui/InstructionsDropdownTitle/InstructionsDropdownTitle";
import { levelArray } from "@/modules/model/api/routes/instructions-id-level/constants/levels";
import { Instruction } from "@/modules/model/api/routes/instructions-id/data";
import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workoutIds";
import { GetStaticPaths } from "next";
import {
  MuiChevronLeftIcon,
  MuiChevronRightIcon,
} from "@/modules/components/library/mui/muiIcons";
import Link from "next/link";

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
      <MuiGrid container mt={4} mb={4}>
        <MuiGrid item xs={12}>
          <InstructionsDropdownTitle params={params} />
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
        <MuiGrid
          item
          xs={12}
          justifyContent="space-between"
          display="flex"
          mt={2}
          mb={2}
        >
          <MuiButton
            size="large"
            sx={{
              color: colors.white,
            }}
            startIcon={<MuiChevronLeftIcon />}
            LinkComponent={Link}
            href={`/instructions/${workoutId}/level-${Math.max(level - 1, 1)}`}
          >
            Previous
          </MuiButton>
          <MuiButton
            size="large"
            sx={{
              color: colors.white,
            }}
            endIcon={<MuiChevronRightIcon />}
            LinkComponent={Link}
            href={`/instructions/${workoutId}/level-${Math.min(level + 1, 10)}`}
          >
            Next
          </MuiButton>
        </MuiGrid>
      </MuiGrid>
    </MuiContainer>
  );
}

export default WorkoutInstructionsPage;
