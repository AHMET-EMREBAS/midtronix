import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SampleTableComponent } from './sample-table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<SampleTableComponent> = {
  component: SampleTableComponent,
  title: 'SampleTableComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<SampleTableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
