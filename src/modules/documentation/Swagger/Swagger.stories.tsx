import { Meta, StoryObj } from "@storybook/react";
import buildOas from "../../model/api/openapiBuilder";

import Swagger from "./Swagger";

const meta: Meta = {
  title: "Documentation/Swagger",
  component: Swagger,
  tags: ["!autodocs"],
  args: {
    json: buildOas(),
  },
};

export default meta;

type Story = StoryObj<typeof Swagger>;

export const API: Story = {};
