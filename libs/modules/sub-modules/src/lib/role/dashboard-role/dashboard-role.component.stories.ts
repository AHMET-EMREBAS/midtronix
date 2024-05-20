import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardRoleComponent } from './dashboard-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardRoleComponent> = {
  component: DashboardRoleComponent,
  title: 'DashboardRoleComponent',
};
export default meta;
type Story = StoryObj<DashboardRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-role works!/gi)).toBeTruthy();
  },
};
