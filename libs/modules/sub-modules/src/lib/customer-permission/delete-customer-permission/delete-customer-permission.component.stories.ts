import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteCustomerPermissionComponent } from './delete-customer-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteCustomerPermissionComponent> = {
  component: DeleteCustomerPermissionComponent,
  title: 'DeleteCustomerPermissionComponent',
};
export default meta;
type Story = StoryObj<DeleteCustomerPermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
