import type { Meta, StoryObj } from '@storybook/angular';
import { HomeCustomerPermissionComponent } from './home-customer-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeCustomerPermissionComponent> = {
  component: HomeCustomerPermissionComponent,
  title: 'HomeCustomerPermissionComponent',
};
export default meta;
type Story = StoryObj<HomeCustomerPermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-customer-permission works!/gi)).toBeTruthy();
  },
};
