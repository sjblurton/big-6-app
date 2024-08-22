import { Meta, StoryObj } from "@storybook/react"
import InstructionsDropdownTitle from "./InstructionsDropdownTitle"

const meta: Meta = {
    title: "Components/Instructions/InstructionsDropdownTitle",
    component: InstructionsDropdownTitle,
}

export default meta

type Story = StoryObj<typeof InstructionsDropdownTitle>

export const Default: Story = {
    args: {
        params: {
            level: "level-1",
            name: "pull-ups",
        },
    },
}

export const Level2: Story = {
    args: {
        params: {
            level: "level-2",
            name: "pull-ups",
        },
    },
}

export const PushUps: Story = {
    args: {
        params: {
            level: "level-6",
            name: "push-ups",
        },
    },
}
