import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteCustomerAccountComponent } from './delete-customer-account.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteCustomerAccountComponent> = {
  component: DeleteCustomerAccountComponent,
  title: 'DeleteCustomerAccountComponent',
};
export default meta;
type Story = StoryObj<DeleteCustomerAccountComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
