import type { Meta, StoryObj } from "@storybook/react"

import { mockExampleWorkout } from "@/modules/model/api/routes/workouts/mockData/workoutsMock"
import { disableArg } from "@/modules/storybook/argTypes/disableArgs"
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas"
import { workoutIdsSchema } from "@/modules/model/api/routes/workouts/inputs/inputs"
import { PropsWithChildren } from "react"
import {
    Title,
    Subtitle,
    Description,
    Source,
    Stories,
    Primary,
    Controls,
    DocsContainer,
    DocsContainerProps,
} from "@storybook/blocks"
import WorkoutCard from "./WorkoutCard"

type Args = {
    mockProps: WorkoutData
    workoutName: string
}

const initialMockProps = mockExampleWorkout("bridges")

function mergeUserOverrides(args: Args) {
    const mergedArgs = args

    if (args.workoutName && args.mockProps) {
        mergedArgs.mockProps.workoutId = workoutIdsSchema.parse(
            args.workoutName
        )
    }

    return { workout: mergedArgs.mockProps }
}

/**
 * The WorkoutCard component is used to display the latest workout
 * with an image and progress bar to show the last time and how well you are doing.
 */

const meta: Meta = {
    title: "Components/Feedback/WorkoutCard",
    component: WorkoutCard,
    parameters: {
        docs: {
            container: (props: PropsWithChildren<DocsContainerProps>) => (
                <DocsContainer {...props}>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Source
                        code={`<WorkoutCard
  workout={{
    comments: "This is a comment",
    date: 1720892933102,
    key: "0ec2272c-51c9-4972-9438-3d2cb49834cc-0",
    level: 8,
    reps: [10, 15, 20],
    user: "Dion_Dibbert@example.net",
    workoutId: "handstands",
  }}
/>`}
                    />
                    <Primary />
                    <Controls />
                    <Stories />
                </DocsContainer>
            ),
        },
    },
    argTypes: {
        workout: disableArg,
        mockProps: disableArg,
        workoutName: {
            description: "The name of the workout",
            control: {
                type: "select",
            },
            options: [
                "bridges",
                "handstands",
                "leg-raises",
                "pull-ups",
                "push-ups",
                "squats",
            ],
        },
    },
    args: {
        mockProps: initialMockProps,
        workoutName: "bridges",
    },
    decorators: [
        (Story) => (
            <div style={{ width: "500px" }}>
                <Story />
            </div>
        ),
    ],

    render: (args) => <WorkoutCard {...mergeUserOverrides(args as Args)} />,
}

export default meta

type Story = StoryObj<Args>

export const Bridges: Story = {
    args: {
        workoutName: "bridges",
    },
}

export const Handstands: Story = {
    args: {
        workoutName: "handstands",
    },
}

export const LegRaises: Story = {
    args: {
        workoutName: "leg-raises",
    },
}

export const PullUps: Story = {
    args: {
        workoutName: "pull-ups",
    },
}

export const PushUps: Story = {
    args: {
        workoutName: "push-ups",
    },
}

export const Squats: Story = {
    args: {
        workoutName: "squats",
    },
}
