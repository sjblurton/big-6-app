import type { Meta, StoryObj } from "@storybook/react";

import BarChart from "./BarChart";

const meta: Meta = {
  title: "Components/DayBarChart",
  component: BarChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    reps: {
      description:
        "An array of numbers of reps for each set completed in a day.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: {
    reps: [9, 7, 3],
  },
};
