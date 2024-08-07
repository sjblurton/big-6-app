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
        name: "Workout Manual",
        path: "/workout-manual",
      },
      {
        name: "Weekly Routines",
        path: "/weekly-routines",
      },
      {
        name: "Logout",
        path: "/logout",
      },
      {
        name: "Dashboard",
        path: "/dashboard",
      },
      {
        name: "Home",
        path: "/",
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Dashboard: Story = {
  name: "on /dashboard",
};

export const WorkoutManual: Story = {
  name: "on /workout-manual",
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/workout-manual",
      },
    },
  },
};

export const WeeklyRoutines: Story = {
  name: "on /weekly-routines",
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/weekly-routines",
      },
    },
  },
};

export const Logout: Story = {
  name: "on /logout",
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/logout",
      },
    },
  },
};

export const Home: Story = {
  name: "on /",
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};
