import type { Meta, StoryObj } from '@storybook/angular';
import { InputDateRangeComponent } from './input-date-range.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputDateRangeComponent> = {
  component: InputDateRangeComponent,
  title: 'InputDateRangeComponent',
};
export default meta;
type Story = StoryObj<InputDateRangeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-date-range works!/gi)).toBeTruthy();
  },
};
