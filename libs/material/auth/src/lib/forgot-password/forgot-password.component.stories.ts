import type { Meta, StoryObj } from '@storybook/angular';
import { ForgotPasswordComponent } from './forgot-password.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ForgotPasswordComponent> = {
  component: ForgotPasswordComponent,
  title: 'ForgotPasswordComponent',
};
export default meta;
type Story = StoryObj<ForgotPasswordComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/forgot-password works!/gi)).toBeTruthy();
  },
};
