import React, { PropsWithChildren } from "react"
import type { Preview } from "@storybook/react"
import MuiThemeProvider from "../src/modules/components/library/ThemeProvider/MuiThemeProvider"
import "../src/styles/main.scss"
import "../src/styles/base/reset.scss"
import "../src/styles/base/global.scss"
import { themes } from "@storybook/theming"
import { mswLoader, initialize } from "msw-storybook-addon"
import { handlers } from "../src/modules/mockServiceWorker/handlers"
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

initialize({ onUnhandledRequest: "warn" })

const preview: Preview = {
    tags: ["autodocs"],
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/dashboard",
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
