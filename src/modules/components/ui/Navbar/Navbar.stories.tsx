import type { Meta, StoryObj } from "@storybook/react";

import Navbar, { NavbarProps } from "./Navbar";

const meta: Meta<NavbarProps> = {
  title: "Components/NavigationBar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    routes: [
      {
        name: "Getting Started",
        path: "/docs",
      },
      {
        name: "Components",
        path: "/docs",
      },
      {
        name: "API",
        path: "/docs",
      },
      {
        name: "GitHub",
        path: "/github",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
