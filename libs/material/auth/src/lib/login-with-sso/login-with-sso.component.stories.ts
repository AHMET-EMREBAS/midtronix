import type { Meta, StoryObj } from '@storybook/angular';
import { LoginWithSsoComponent } from './login-with-sso.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LoginWithSsoComponent> = {
  component: LoginWithSsoComponent,
  title: 'LoginWithSsoComponent',
};
export default meta;
type Story = StoryObj<LoginWithSsoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/login-with-sso works!/gi)).toBeTruthy();
  },
};
