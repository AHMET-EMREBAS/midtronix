import type { Meta, StoryObj } from '@storybook/angular';
import { ViewCustomerPermissionComponent } from './view-customer-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewCustomerPermissionComponent> = {
  component: ViewCustomerPermissionComponent,
  title: 'ViewCustomerPermissionComponent',
};
export default meta;
type Story = StoryObj<ViewCustomerPermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
