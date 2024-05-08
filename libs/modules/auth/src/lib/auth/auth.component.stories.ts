import type { Meta, StoryObj } from '@storybook/angular';
import { AuthComponent } from './auth.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AuthComponent> = {
  component: AuthComponent,
  title: 'AuthComponent',
};
export default meta;
type Story = StoryObj<AuthComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/auth works!/gi)).toBeTruthy();
  },
};
