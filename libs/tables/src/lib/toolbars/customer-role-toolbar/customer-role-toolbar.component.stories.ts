import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerRoleToolbarComponent } from './customer-role-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerRoleToolbarComponent> = {
  component: CustomerRoleToolbarComponent,
  title: 'CustomerRoleToolbarComponent',
};
export default meta;
type Story = StoryObj<CustomerRoleToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
