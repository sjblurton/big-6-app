import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./Navbar";

const meta: Meta = {
  title: "Navigation/DocsNavbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
