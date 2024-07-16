import type { Meta, StoryObj } from "@storybook/react";

import InstructionsCard from "./InstructionsCard";

const meta: Meta = {
  title: "Components/InstructionsCard",
  component: InstructionsCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InstructionsCard>;

export const Default: Story = {};
