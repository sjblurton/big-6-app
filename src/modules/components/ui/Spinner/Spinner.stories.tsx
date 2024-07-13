import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";

const meta: Meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
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
