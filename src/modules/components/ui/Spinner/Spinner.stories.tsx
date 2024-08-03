import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";

/**
 * The Spinner component is used to show the user that something is loading.
 * We are keeping consistency with the design of the app by using the same
 * design as the progress bar.
 */

const meta: Meta = {
  title: "Components/Indicators/Spinner",
  component: Spinner,
  argTypes: {
    speed: {
      control: "select",
      options: ["slow", "medium", "fast"],
      description: "The speed of the spinner",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Slow: Story = {
  args: {
    speed: "slow",
  },
};

export const Medium: Story = {
  args: {
    speed: "medium",
  },
};

export const Fast: Story = {
  args: {
    speed: "fast",
  },
};
