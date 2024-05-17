import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerPermissionComponent } from './customer-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerPermissionComponent> = {
  component: CustomerPermissionComponent,
  title: 'CustomerPermissionComponent',
};
export default meta;
type Story = StoryObj<CustomerPermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
