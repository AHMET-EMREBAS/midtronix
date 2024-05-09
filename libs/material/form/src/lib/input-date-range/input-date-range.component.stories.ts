import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputDateRangeComponent } from './input-date-range.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';

const meta: Meta<InputDateRangeComponent> = {
  component: InputDateRangeComponent,
  title: 'InputDateRangeComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputDateRangeComponent>;

const dateControl = new FormControl('', []);

export const Primary: Story = {
  args: {
    label: 'Select date',
    formControl: dateControl,
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
