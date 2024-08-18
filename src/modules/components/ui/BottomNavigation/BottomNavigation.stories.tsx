import type { Meta, StoryObj } from "@storybook/react"

import { PropsWithChildren } from "react"
import {
    Title,
    Subtitle,
    Description,
    Source,
    DocsContainer,
    DocsContainerProps,
} from "@storybook/blocks"
import BottomNavigation from "./BottomNavigation"

/**
 * The BottomNavigation component is used to navigate
 * between different sections of the app. On mobile this type
 * of navigation is at a more convent reach for the thumb.
 * This will be the main navigation from the dashboard to move around
 * and for daily uses.
 */

const meta: Meta = {
    title: "Components/Navigation/Bottom Navigation",
    component: BottomNavigation,
    parameters: {
        nextjs: {
            pathname: "/dashboard",
        },
        docs: {
            container: (props: PropsWithChildren<DocsContainerProps>) => (
                <DocsContainer {...props}>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Source code="<BottomNavigation />" />
                </DocsContainer>
            ),
        },
    },
}

export default meta

type Story = StoryObj<typeof BottomNavigation>

export const Dashboard: Story = {
    name: "on /dashboard",
}

export const Log: Story = {
    name: "on /log",
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/log",
            },
        },
    },
}

export const Calender: Story = {
    name: "on /calender",
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/calender",
            },
        },
    },
}

export const Timer: Story = {
    name: "on /timer",
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/timer",
            },
        },
    },
}

export const Add: Story = {
    name: "on /add",
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/add",
            },
        },
    },
}
