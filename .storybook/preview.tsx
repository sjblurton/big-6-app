import {
    Controls,
    Description,
    DocsContainer,
    DocsContainerProps,
    Primary,
    Source,
    Stories,
    Subtitle,
    Title,
} from "@storybook/blocks"
import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"
import { initialize, mswLoader } from "msw-storybook-addon"
import React, { PropsWithChildren } from "react"

import MuiThemeProvider from "../src/components/Providers/ThemeProvider/MuiThemeProvider"
import { handlers } from "../src/libs/mock-service-worker/handlers"
import "../src/styles/base/global.scss"
import "../src/styles/base/reset.scss"
import "../src/styles/main.scss"
import { ROUTES } from "../src/constants/strings/routes"

initialize({ onUnhandledRequest: "warn" })

const preview: Preview = {
    tags: ["autodocs"],
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: ROUTES.dashboard.value,
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: "centered",
        docs: {
            theme: themes.dark,
            container: (props: PropsWithChildren<DocsContainerProps>) => (
                <DocsContainer {...props}>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Source />
                    <Primary />
                    <Controls />
                    <Stories />
                </DocsContainer>
            ),
        },
        msw: {
            handlers,
        },
    },
    loaders: [mswLoader],
    decorators: [
        (Story) => (
            <MuiThemeProvider>
                <Story />
            </MuiThemeProvider>
        ),
    ],
}

export default preview
