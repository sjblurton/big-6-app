import type { Meta, StoryObj } from "@storybook/react";

import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import { disableControlsOnly } from "@/modules/storybook/argTypes/disableArgs";
import MonthlyLineChart from "./MonthlyLineChart";

const ONE_WEEK = 604800000;

const mockArgs: WorkoutData[] = [
  {
    key: "key1",
    date: new Date().getTime(),
    reps: [30, 23, 28],
    level: 5,
    workoutId: "push-ups",
    comments: "comments",
    user: "user@email.co.uk",
  },
  {
    key: "key2",
    date: new Date().getTime() - ONE_WEEK,
    reps: [30, 27, 22],
    level: 5,
    workoutId: "push-ups",
    comments: "comments",
    user: "user@email.co.uk",
  },
  {
    key: "key3",
    date: new Date().getTime() - ONE_WEEK * 2,
    reps: [25, 22, 18],
    level: 5,
    workoutId: "push-ups",
    comments: "comments",
    user: "user@email.co.uk",
  },
  {
    key: "key4",
    date: new Date().getTime() - ONE_WEEK * 3,
    reps: [20, 18, 15],
    level: 5,
    workoutId: "push-ups",
    comments: "comments",
    user: "user@email.co.uk",
  },
];

const meta: Meta = {
  title: "Components/MonthlyLineChart",
  component: MonthlyLineChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    data: {
      ...disableControlsOnly,
      description: "An array of objects representing the data for each day.",
    },
  },
  args: {
    data: mockArgs,
  },
};

export default meta;

type Story = StoryObj<typeof MonthlyLineChart>;

export const Default: Story = {};
