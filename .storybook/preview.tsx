import React from "react";
import type { Preview } from "@storybook/react";
import MuiThemeProvider from "../src/modules/components/library/ThemeProvider/MuiThemeProvider";
import "../src/styles/main.scss";
import "../src/styles/base/reset.scss";
import "../src/styles/base/global.scss";
import { themes } from "@storybook/theming";
import { mswLoader, initialize } from "msw-storybook-addon";
import { handlers } from "../src/modules/mockServiceWorker/handlers";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    docs: {
      theme: themes.dark,
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
};

export default preview;
