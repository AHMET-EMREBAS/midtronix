import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerRoleComponent } from './customer-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerRoleComponent> = {
  component: CustomerRoleComponent,
  title: 'CustomerRoleComponent',
};
export default meta;
type Story = StoryObj<CustomerRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
