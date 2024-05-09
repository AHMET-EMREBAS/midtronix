import type { Meta, StoryObj } from '@storybook/angular';
import { InputTextComponent } from './input-text.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputTextComponent> = {
  component: InputTextComponent,
  title: 'InputTextComponent',
};
export default meta;
type Story = StoryObj<InputTextComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-text works!/gi)).toBeTruthy();
  },
};
