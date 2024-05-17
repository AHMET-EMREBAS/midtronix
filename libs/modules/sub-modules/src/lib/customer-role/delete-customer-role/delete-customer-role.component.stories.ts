import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteCustomerRoleComponent } from './delete-customer-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteCustomerRoleComponent> = {
  component: DeleteCustomerRoleComponent,
  title: 'DeleteCustomerRoleComponent',
};
export default meta;
type Story = StoryObj<DeleteCustomerRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
