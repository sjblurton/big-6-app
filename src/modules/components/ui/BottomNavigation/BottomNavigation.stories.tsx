import type { Meta, StoryObj } from "@storybook/react";

import BottomNavigation from "./BottomNavigation";

const meta: Meta = {
  title: "Components/BottomNavigation",
  component: BottomNavigation,
};

export default meta;

type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: {},
};
