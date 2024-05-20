import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardPermissionComponent } from './dashboard-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardPermissionComponent> = {
  component: DashboardPermissionComponent,
  title: 'DashboardPermissionComponent',
};
export default meta;
type Story = StoryObj<DashboardPermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-permission works!/gi)).toBeTruthy();
  },
};
