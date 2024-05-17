import type { Meta, StoryObj } from '@storybook/angular';
import { CreateCustomerRoleComponent } from './create-customer-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateCustomerRoleComponent> = {
  component: CreateCustomerRoleComponent,
  title: 'CreateCustomerRoleComponent',
};
export default meta;
type Story = StoryObj<CreateCustomerRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
