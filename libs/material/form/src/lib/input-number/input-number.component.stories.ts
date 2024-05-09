import type { Meta, StoryObj } from '@storybook/angular';
import { InputNumberComponent } from './input-number.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputNumberComponent> = {
  component: InputNumberComponent,
  title: 'InputNumberComponent',
};
export default meta;
type Story = StoryObj<InputNumberComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-number works!/gi)).toBeTruthy();
  },
};
