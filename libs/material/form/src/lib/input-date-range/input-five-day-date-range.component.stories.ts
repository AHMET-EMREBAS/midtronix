import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputFiveDayDateRangeComponent } from './input-date-range.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';

const meta: Meta<InputFiveDayDateRangeComponent> = {
  component: InputFiveDayDateRangeComponent,
  title: 'InputFiveDayDateRangeComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputFiveDayDateRangeComponent>;

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
