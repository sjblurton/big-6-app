import { Meta, StoryObj } from "@storybook/react";
import logger from "@/modules/logger/logger";
import ButtonGroup from "./ButtonGroup";

const meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
} as Meta;

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", handleClick: () => logger.info("Option 1") },
      { label: "Option 2", handleClick: () => logger.info("Option 2") },
      { label: "Option 3", handleClick: () => logger.info("Option 3") },
    ],
  },
};
