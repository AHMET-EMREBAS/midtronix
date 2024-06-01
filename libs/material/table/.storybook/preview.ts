/* eslint-disable @nx/enforce-module-boundaries */
import { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import '@angular/localize/init';
setCompodocJson(await import('./documentation.json'));

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
};

export default preview;
