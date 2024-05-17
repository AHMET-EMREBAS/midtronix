import type { Meta, StoryObj } from '@storybook/angular';
import { ViewCustomerRoleComponent } from './view-customer-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewCustomerRoleComponent> = {
  component: ViewCustomerRoleComponent,
  title: 'ViewCustomerRoleComponent',
};
export default meta;
type Story = StoryObj<ViewCustomerRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
