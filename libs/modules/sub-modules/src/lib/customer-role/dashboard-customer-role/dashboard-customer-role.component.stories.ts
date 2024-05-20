import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardCustomerRoleComponent } from './dashboard-customer-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardCustomerRoleComponent> = {
  component: DashboardCustomerRoleComponent,
  title: 'DashboardCustomerRoleComponent',
};
export default meta;
type Story = StoryObj<DashboardCustomerRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-customer-role works!/gi)).toBeTruthy();
  },
};
