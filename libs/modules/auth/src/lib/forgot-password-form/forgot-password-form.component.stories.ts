import type { Meta, StoryObj } from '@storybook/angular';
import { ForgotPasswordFormComponent } from './forgot-password-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ForgotPasswordFormComponent> = {
  component: ForgotPasswordFormComponent,
  title: 'ForgotPasswordFormComponent',
};
export default meta;
type Story = StoryObj<ForgotPasswordFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/forgot-password-form works!/gi)).toBeTruthy();
  },
};
