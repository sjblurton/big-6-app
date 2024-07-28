import type { Meta, StoryObj } from "@storybook/react";

import InstructionsOverviewCard from "./InstructionsOverviewCard";

const meta: Meta = {
  title: "Components/InstructionsOverviewCard",
  component: InstructionsOverviewCard,
};

export default meta;

type Story = StoryObj<typeof InstructionsOverviewCard>;

export const PullUps: Story = {
  args: {
    workoutId: "pull-ups",
  },
};

export const PushUps: Story = {
  args: {
    workoutId: "push-ups",
  },
};

export const Squats: Story = {
  args: {
    workoutId: "squats",
  },
};

export const LegRaises: Story = {
  args: {
    workoutId: "leg-raises",
  },
};

export const Bridges: Story = {
  args: {
    workoutId: "bridges",
  },
};

export const Handstands: Story = {
  args: {
    workoutId: "handstands",
  },
};
