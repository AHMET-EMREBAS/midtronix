import type { Meta, StoryObj } from '@storybook/angular';
import { InputUsernameComponent } from './input-username.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputUsernameComponent> = {
  component: InputUsernameComponent,
  title: 'InputUsernameComponent',
};
export default meta;
type Story = StoryObj<InputUsernameComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-username works!/gi)).toBeTruthy();
  },
};
