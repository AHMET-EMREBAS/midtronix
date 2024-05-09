import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputNumberComponent } from './input-number.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<InputNumberComponent> = {
  component: InputNumberComponent,
  title: 'InputNumberComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputNumberComponent>;

export const Primary: Story = {
  args: {
    label: 'Number Input',
    prefixIcon: 'numbers',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Number Input/gi)).toBeTruthy();
  },
};
