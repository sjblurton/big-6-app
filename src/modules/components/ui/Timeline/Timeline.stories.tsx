import type { Meta, StoryObj } from "@storybook/react"
import { faker } from "@faker-js/faker"
import { WORKOUT_IDS } from "@/modules/model/api/routes/shared/workout-ids"
import Timeline from "./Timeline"

const today = new Date().getTime()
const ONE_DAY_MS = 24 * 60 * 60 * 1000

const timeline = [
    {
        time: today,
        title: "Diamond Push Ups",
        level: 6,
        description: "24 Reps",
        key: faker.string.uuid(),
        workoutId: WORKOUT_IDS.PUSH_UPS.key,
    },
    {
        time: today - ONE_DAY_MS,
        title: "Full Bridge",
        level: 5,
        description: "20 Reps",
        key: faker.string.uuid(),
        workoutId: WORKOUT_IDS.BRIDGES.key,
    },
    {
        time: today - ONE_DAY_MS * 2,
        title: "Half Squats",
        level: 3,
        description: "40 Reps",
        key: faker.string.uuid(),
        workoutId: WORKOUT_IDS.SQUATS.key,
    },
    {
        time: today - ONE_DAY_MS * 3,
        title: "Headstand",
        level: 1,
        description: "45 Seconds",
        key: faker.string.uuid(),
        workoutId: WORKOUT_IDS.HANDSTANDS.key,
    },
]

/**
 * The Timeline component is used to show the user their progress
 * over time. This can be used to show the user their progress
 * over time for all the exercises they have done or for a specific one.
 */

const meta: Meta = {
    title: "Components/Feedback/Timeline",
    component: Timeline,
}

export default meta

type Story = StoryObj<typeof Timeline>

export const Default: Story = {
    args: {
        data: timeline,
    },
}
