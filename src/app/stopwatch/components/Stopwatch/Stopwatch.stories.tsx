import { Meta, StoryObj } from "@storybook/react"
import Stopwatch from "./Stopwatch"

/**
 * The Stopwatch component is used to display the
 * time elapsed since the start of a workout.
 * This is useful for Handstands.
 */

const meta: Meta = {
    title: "components/feedback/Stop Watch",
    component: Stopwatch,
}

export default meta

type Story = StoryObj<typeof Stopwatch>

export const Default: Story = {}
