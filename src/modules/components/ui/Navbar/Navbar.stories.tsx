import type { Meta, StoryObj } from "@storybook/react";

import Navbar, { NavbarProps } from "./Navbar";

/**
 * The Navbar component is used to navigate
 * between different less used locations throughout the app.
 * Like the Workout Instructions or Weekly Routines.
 */

const meta: Meta<NavbarProps> = {
  title: "Components/Navigation/Top Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    routes: [
      {
        name: "Workout Instructions",
        path: "/workout-instructions",
      },
      {
        name: "Weekly Routines",
        path: "/weekly-routines",
      },
      {
        name: "Logout",
        path: "/logout",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
