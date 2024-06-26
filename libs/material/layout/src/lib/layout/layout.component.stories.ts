import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { LayoutComponent } from './layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<LayoutComponent> = {
  component: LayoutComponent,
  title: 'LayoutComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<LayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
