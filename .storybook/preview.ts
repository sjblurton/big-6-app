import type { Preview } from "@storybook/react";
import "../src/styles/main.scss";
import "../src/styles/base/reset.scss";
import "../src/styles/base/global.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
