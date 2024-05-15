import type { Meta, StoryObj } from '@storybook/angular';
import { InputRangeComponent } from './input-range.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputRangeComponent> = {
  component: InputRangeComponent,
  title: 'InputRangeComponent',
};
export default meta;
type Story = StoryObj<InputRangeComponent>;

export const Primary: Story = {
  args: {
    min: 0,
    max: 10,
    step: 1,
  },
};

export const Heading: Story = {
  args: {
    min: 0,
    max: 10,
    step: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-range works!/gi)).toBeTruthy();
  },
};
