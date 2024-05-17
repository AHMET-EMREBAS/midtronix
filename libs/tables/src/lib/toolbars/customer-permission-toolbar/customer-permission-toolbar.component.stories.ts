import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerPermissionToolbarComponent } from './customer-permission-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerPermissionToolbarComponent> = {
  component: CustomerPermissionToolbarComponent,
  title: 'CustomerPermissionToolbarComponent',
};
export default meta;
type Story = StoryObj<CustomerPermissionToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
