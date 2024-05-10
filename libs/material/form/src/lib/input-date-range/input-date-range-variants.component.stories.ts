import type { Meta, StoryObj } from '@storybook/angular';
import { InputFiveDayDateRangeComponent } from './input-date-range-variants.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputFiveDayDateRangeComponent> = {
  component: InputFiveDayDateRangeComponent,
  title: 'InputFiveDayDateRangeComponent',
};
export default meta;
type Story = StoryObj<InputFiveDayDateRangeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-date-range-variants works!/gi)).toBeTruthy();
  },
};
