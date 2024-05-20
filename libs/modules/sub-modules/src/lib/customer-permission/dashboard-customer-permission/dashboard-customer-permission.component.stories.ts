import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardCustomerPermissionComponent } from './dashboard-customer-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardCustomerPermissionComponent> = {
  component: DashboardCustomerPermissionComponent,
  title: 'DashboardCustomerPermissionComponent',
};
export default meta;
type Story = StoryObj<DashboardCustomerPermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/dashboard-customer-permission works!/gi)
    ).toBeTruthy();
  },
};
