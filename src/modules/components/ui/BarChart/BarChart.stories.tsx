import type { Meta, StoryObj } from "@storybook/react"
import { faker } from "@faker-js/faker"
import BarChart from "./BarChart"

/**
 * The BarChart component is used to display the
 * number of reps in sets completed in a day.
 */

const meta: Meta = {
    title: "Components/Charts/Bar",
    component: BarChart,
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
}

export default meta

type Story = StoryObj<typeof BarChart>

export const Default: Story = {
    args: {
        reps: [9, 7, 3],
    },
}

export const HighReps: Story = {
    args: {
        reps: [15, 12, 10],
    },
}

export const LowReps: Story = {
    args: {
        reps: [5, 3, 1],
    },
}

export const NoReps: Story = {
    args: {
        reps: [0, 0, 0],
    },
}

export const SingleSet: Story = {
    args: {
        reps: [5],
    },
}

export const SingleRep: Story = {
    args: {
        reps: [1],
    },
}

export const SingleZero: Story = {
    args: {
        reps: [0],
    },
}

export const NoData: Story = {
    args: {
        reps: [],
    },
}

export const RandomData: Story = {
    args: {
        reps: new Array(faker.number.int({ min: 1, max: 10 }))
            .fill(0)
            .map(() => faker.number.int({ min: 0, max: 20 })),
    },
}
