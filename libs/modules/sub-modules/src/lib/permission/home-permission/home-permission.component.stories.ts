import type { Meta, StoryObj } from '@storybook/angular';
import { HomePermissionComponent } from './home-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomePermissionComponent> = {
  component: HomePermissionComponent,
  title: 'HomePermissionComponent',
};
export default meta;
type Story = StoryObj<HomePermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-permission works!/gi)).toBeTruthy();
  },
};
