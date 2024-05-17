import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateCustomerPermissionComponent } from './update-customer-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateCustomerPermissionComponent> = {
  component: UpdateCustomerPermissionComponent,
  title: 'UpdateCustomerPermissionComponent',
};
export default meta;
type Story = StoryObj<UpdateCustomerPermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
