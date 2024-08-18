import type { Meta, StoryObj } from "@storybook/react"

import { disableControlsOnly } from "@/modules/storybook/argTypes/disableArgs"
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas"
import { PropsWithChildren } from "react"
import {
    Title,
    Subtitle,
    Description,
    Source,
    DocsContainer,
    DocsContainerProps,
    Primary,
} from "@storybook/blocks"
import { WorkoutIds } from "@/modules/model/api/routes/shared/workoutIds"
import { faker } from "@faker-js/faker"
import LineChart from "./LineChart"

const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000

function generateMockWorkoutData({
    numberOfEntries,
    workoutId = "push-ups",
    level = 5,
    isHighReps = false,
    isLowReps = false,
}: {
    numberOfEntries: number
    workoutId: WorkoutIds
    level: number
    isHighReps?: boolean
    isLowReps?: boolean
}): WorkoutData[] {
    const mockData = []

    for (let i = 0; i < numberOfEntries; i += 1) {
        const lowReps = faker.number.int({ min: 1, max: 5 })
        const averageRepRange = faker.number.int({ min: 6, max: 15 })
        const highRepRange = faker.number.int({ min: 15, max: 30 })

        let reps: number[] = [lowReps, averageRepRange, highRepRange]

        if (isHighReps) {
            reps = [highRepRange, highRepRange, highRepRange]
        }
        if (isLowReps) {
            reps = [lowReps, lowReps, lowReps]
        }

        const mockEntry = {
            key: faker.string.uuid(),
            date: new Date().getTime() - ONE_WEEK_MS * (i + 1),
            reps,
            level,
            workoutId,
            comments: faker.lorem.sentence(),
            user: faker.internet.email(),
        }

        mockData.push(mockEntry)
    }

    return mockData
}

/**
 * The LineChart component is used to display the
 * number of reps over time to see ones progress on the level.
 */

const meta: Meta = {
    title: "Components/Charts/Line",
    component: LineChart,
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
        docs: {
            container: (props: PropsWithChildren<DocsContainerProps>) => (
                <DocsContainer {...props}>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Source code="<InstructionsOverviewCard workoutId='pull-ups' />" />
                    <Primary />
                </DocsContainer>
            ),
        },
    },
    argTypes: {
        data: {
            ...disableControlsOnly,
            description:
                "An array of objects representing the data for each day.",
        },
    },
}

export default meta

type Story = StoryObj<typeof LineChart>

export const Default: Story = {
    args: {
        data: generateMockWorkoutData({
            numberOfEntries: 4,
            workoutId: "push-ups",
            level: 5,
        }),
    },
}

export const HighReps: Story = {
    args: {
        data: generateMockWorkoutData({
            numberOfEntries: 10,
            workoutId: "push-ups",
            level: 5,
            isHighReps: true,
        }),
    },
}

export const LowReps: Story = {
    args: {
        data: generateMockWorkoutData({
            numberOfEntries: 10,
            workoutId: "push-ups",
            level: 5,
            isLowReps: true,
        }),
    },
}
