import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateCustomerRoleComponent } from './update-customer-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateCustomerRoleComponent> = {
  component: UpdateCustomerRoleComponent,
  title: 'UpdateCustomerRoleComponent',
};
export default meta;
type Story = StoryObj<UpdateCustomerRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
