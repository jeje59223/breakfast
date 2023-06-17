import type { Preview } from '@storybook/vue3'
import { setup } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";

setup((app) => {
    // Registers your app's plugins into Storybook
    registerPlugins(app);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
