import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; 
import 'material-icons/iconfont/material-icons.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
