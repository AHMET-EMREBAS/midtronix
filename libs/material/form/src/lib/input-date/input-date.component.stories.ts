import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputDateComponent } from './input-date.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';

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

const dateControl = new FormControl('', []);

export const Primary: Story = {
  args: {
    label: 'Select date',
    inputControl: dateControl,
    inputName: 'date',
  },
};
export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Select date/gi)).toBeTruthy();
  },
};
