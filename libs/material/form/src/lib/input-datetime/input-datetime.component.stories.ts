import type { Meta, StoryObj } from '@storybook/angular';
import { InputDatetimeComponent } from './input-datetime.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputDatetimeComponent> = {
  component: InputDatetimeComponent,
  title: 'InputDatetimeComponent',
};
export default meta;
type Story = StoryObj<InputDatetimeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-datetime works!/gi)).toBeTruthy();
  },
};
