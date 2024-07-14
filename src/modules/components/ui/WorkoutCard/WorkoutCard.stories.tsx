import type {Meta, StoryObj} from "@storybook/react";

import {mockExampleWorkout} from "@/modules/model/api/routes/workouts/mockData/workoutsMock";
import {disableArg} from "@/modules/storybook/argTypes/disableArgs";
import {WorkoutData} from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import {workoutIdsSchema} from "@/modules/model/api/routes/workouts/inputs/inputs";
import Card from "./WorkoutCard";

type Args = {
  mockProps: WorkoutData;
  workoutName: string;
};

const initialMockProps = mockExampleWorkout("bridges");

function mergeUserOverrides(args: Args) {
  const mergedArgs = args;

  if (args.workoutName && args.mockProps) {
    mergedArgs.mockProps.workoutId = workoutIdsSchema.parse(args.workoutName);
  }

  return {workout: mergedArgs.mockProps};
}

const meta: Meta = {
  title: "Components/WorkoutCard",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    workout: disableArg,
    mockProps: disableArg,
    workoutName: {
      description: "The name of the workout",
      control: "select",
      options: [
        "bridges",
        "handstands",
        "leg-raises",
        "pull-ups",
        "push-ups",
        "squats",
      ],
    },
  },
  args: {
    mockProps: initialMockProps,
    workoutName: "bridges",
  },
  decorators: [
    (Story) => (
      <div style={{width: "500px"}}>
        <Story />
      </div>
    ),
  ],

  render: (args) => <Card {...mergeUserOverrides(args as Args)} />,
};

export default meta;

type Story = StoryObj<Args>;

export const Bridges: Story = {
  args: {
    workoutName: "bridges",
  },
};

export const Handstands: Story = {
  args: {
    workoutName: "handstands",
  },
};

export const LegRaises: Story = {
  args: {
    workoutName: "leg-raises",
  },
};

export const PullUps: Story = {
  args: {
    workoutName: "pull-ups",
  },
};

export const PushUps: Story = {
  args: {
    workoutName: "push-ups",
  },
};

export const Squats: Story = {
  args: {
    workoutName: "squats",
  },
};
