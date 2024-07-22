import type {Preview} from "@storybook/react";
import {withThemeProvider} from "storybook-addon-theme-provider";
import MuiThemeProvider from "../src/modules/components/library/ThemeProvider/MuiThemeProvider";
import "../src/styles/main.scss";
import "../src/styles/base/reset.scss";
import "../src/styles/base/global.scss";
import {themes} from "@storybook/theming";

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
  },
  // @ts-ignore
  decorators: [withThemeProvider(MuiThemeProvider)],
};

export default preview;
