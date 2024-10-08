import { type Meta, type StoryObj } from "@storybook/react"

import Coverage from "./Coverage"

const meta: Meta = {
    title: "Documentation/Test Coverage",
    component: Coverage,
    tags: ["!autodocs"],
}

export default meta

type Story = StoryObj<typeof Coverage>

export const CoverageDocumentation: Story = {
    name: "Coverage",
}
