import type { Meta, StoryObj } from "@storybook/react";
import pushUps from "@/modules/model/api/routes/instructions-id/data/pushUps";
import squats from "@/modules/model/api/routes/instructions-id/data/squats";
import pullUps from "@/modules/model/api/routes/instructions-id/data/pullUps";
import InstructionsCard from "./InstructionsCard";

const pushUp6 = pushUps.filter(
  ({ level: levelNumber }) => levelNumber === 6,
)[0];

const squat4 = squats.filter(({ level: levelNumber }) => levelNumber === 4)[0];

const pullUp10 = pullUps.filter(
  ({ level: levelNumber }) => levelNumber === 10,
)[0];

/**
 * The InstructionsCard component is used to display the
 * with an image on how to do the exercise correctly.
 */

const meta: Meta = {
  title: "Components/Instructions/Each Exercise",
  component: InstructionsCard,
};

export default meta;

type Story = StoryObj<typeof InstructionsCard>;

export const PushUp6Negative: Story = {
  name: "Push Up Level 6 Negative",
  args: {
    name: pushUp6.name,
    directions: pushUp6.directions.negative,
    workoutKey: pushUp6.workoutId,
    level: pushUp6.level,
    isPositive: false,
  },
};

export const PushUp6Positive: Story = {
  name: "Push Up Level 6 Positive",
  args: {
    name: pushUp6.name,
    directions: pushUp6.directions.positive,
    workoutKey: pushUp6.workoutId,
    level: pushUp6.level,
    isPositive: true,
  },
};

export const Squat4Negative: Story = {
  name: "Squat Level 4 Negative",
  args: {
    name: squat4.name,
    directions: squat4.directions.negative,
    workoutKey: "squats",
    level: squat4.level,
    isPositive: false,
  },
};

export const Squat4Positive: Story = {
  name: "Squat Level 4 Positive",
  args: {
    name: squat4.name,
    directions: squat4.directions.negative,
    workoutKey: squat4.workoutId,
    level: squat4.level,
    isPositive: true,
  },
};

export const PullUp10Negative: Story = {
  name: "Pull Up Level 10 Negative",
  args: {
    name: pullUp10.name,
    directions: pullUp10.directions.negative,
    workoutKey: pullUp10.workoutId,
    level: pullUp10.level,
    isPositive: false,
  },
};

export const PullUp10Positive: Story = {
  name: "Pull Up Level 10 Positive",
  args: {
    name: pullUp10.name,
    directions: pullUp10.directions.positive,
    workoutKey: pullUp10.workoutId,
    level: pullUp10.level,
    isPositive: true,
  },
};
