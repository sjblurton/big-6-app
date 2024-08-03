import type { Meta, StoryObj } from "@storybook/react";

import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workoutIds";
import { PropsWithChildren } from "react";
import {
  Title,
  Subtitle,
  Description,
  Source,
  DocsContainer,
  DocsContainerProps,
} from "@storybook/blocks";
import InstructionsOverviewCard from "./InstructionsOverviewCard";

/**
 * The InstructionsOverviewCard component is used to display the
 * with an image the core exercise and list out all it's levels linking back to
 * a Instruction Page for each level.
 */

const meta: Meta = {
  title: "Components/Instructions/Workout Overview",
  component: InstructionsOverviewCard,
  argTypes: {
    workoutId: {
      description: "The id of the workout to display instructions for.",
      options: WORKOUT_ID_LIST,
    },
  },
  parameters: {
    docs: {
      container: (props: PropsWithChildren<DocsContainerProps>) => (
        <DocsContainer {...props}>
          <Title />
          <Subtitle />
          <Description />
          <Source code="<InstructionsOverviewCard workoutId='pull-ups' />" />
        </DocsContainer>
      ),
    },
  },
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
