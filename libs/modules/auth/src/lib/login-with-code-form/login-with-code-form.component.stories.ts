import type { Meta, StoryObj } from '@storybook/angular';
import { LoginWithCodeFormComponent } from './login-with-code-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LoginWithCodeFormComponent> = {
  component: LoginWithCodeFormComponent,
  title: 'LoginWithCodeFormComponent',
};
export default meta;
type Story = StoryObj<LoginWithCodeFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/login-with-code-form works!/gi)).toBeTruthy();
  },
};
