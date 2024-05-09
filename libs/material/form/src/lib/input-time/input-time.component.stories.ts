import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputTimeComponent } from './input-time.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<InputTimeComponent> = {
  component: InputTimeComponent,
  title: 'InputTimeComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputTimeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-time works!/gi)).toBeTruthy();
  },
};
