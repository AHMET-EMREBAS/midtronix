import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputDateComponent } from './input-date.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<InputDateComponent> = {
  component: InputDateComponent,
  title: 'InputDateComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputDateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-date works!/gi)).toBeTruthy();
  },
};
