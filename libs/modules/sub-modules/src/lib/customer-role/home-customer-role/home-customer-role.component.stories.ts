import type { Meta, StoryObj } from '@storybook/angular';
import { HomeCustomerRoleComponent } from './home-customer-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeCustomerRoleComponent> = {
  component: HomeCustomerRoleComponent,
  title: 'HomeCustomerRoleComponent',
};
export default meta;
type Story = StoryObj<HomeCustomerRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-customer-role works!/gi)).toBeTruthy();
  },
};
