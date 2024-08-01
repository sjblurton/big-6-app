import { Meta, StoryObj } from "@storybook/react";

import ColorPalette from "./ColorPalette";

const meta: Meta = {
  title: "DesignSystem/ColorPalette",
  component: ColorPalette,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {};
