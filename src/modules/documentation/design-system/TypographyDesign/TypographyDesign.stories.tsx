import { Meta, StoryObj } from "@storybook/react"

import TypographyDesign from "./TypographyDesign"

const meta: Meta = {
    title: "Design System/Typography Design",
    tags: ["!autodocs"],
    component: TypographyDesign,
    parameters: {
        controls: { expanded: true },
    },
}

export default meta

type Story = StoryObj<typeof TypographyDesign>

export const Default: Story = {}
