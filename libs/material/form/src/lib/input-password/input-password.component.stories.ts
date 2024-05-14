import type { Meta, StoryObj } from '@storybook/angular';
import { InputPasswordComponent } from './input-password.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputPasswordComponent> = {
  component: InputPasswordComponent,
  title: 'InputPasswordComponent',
};
export default meta;
type Story = StoryObj<InputPasswordComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-password works!/gi)).toBeTruthy();
  },
};
