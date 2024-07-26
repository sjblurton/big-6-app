import type { Meta, StoryObj } from "@storybook/react";

import Timeline from "./Timeline";

const today = new Date().getTime();
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const timeline = [
  {
    time: today,
    title: "Diamond Push Ups",
    level: 6,
    reps: "24 Reps",
  },
  {
    time: today - ONE_DAY_MS,
    title: "Full Bridge",
    level: 5,
    reps: "20 Reps",
  },
  {
    time: today - ONE_DAY_MS * 2,
    title: "Half Squats",
    level: 3,
    reps: "40 Reps",
  },
  {
    time: today - ONE_DAY_MS * 3,
    title: "Headstand",
    level: 1,
    reps: "45 Seconds",
  },
];

const meta: Meta = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    data: timeline,
  },
};
