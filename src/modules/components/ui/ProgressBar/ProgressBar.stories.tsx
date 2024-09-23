import type { Meta, StoryObj } from "@storybook/react"
import ProgressBar from "./ProgressBar"

/**
 * The ProgressBar component is used to show the progress of a user
 * towards a goal. This can be used to show the progress of a user
 * towards the goal like moving to the next workout level.
 */

const meta: Meta = {
    title: "Components/Indicators/ProgressBar",
    component: ProgressBar,
    argTypes: {
        goal: {
            control: "number",
            description: "The goal that the user is trying to reach",
        },
        actual: {
            control: "number",
            description: "The actual progress the user has made",
        },
    },
}

export default meta

type Story = StoryObj<typeof ProgressBar>

export const Half: Story = {
    args: {
        actual: 20,
        goal: 40,
    },
}

export const Full: Story = {
    args: {
        actual: 40,
        goal: 40,
    },
}

export const Empty: Story = {
    args: {
        actual: 0,
        goal: 40,
    },
}
