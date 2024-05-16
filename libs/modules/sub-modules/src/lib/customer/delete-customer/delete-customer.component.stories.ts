import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteCustomerComponent } from './delete-customer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteCustomerComponent> = {
  component: DeleteCustomerComponent,
  title: 'DeleteCustomerComponent',
};
export default meta;
type Story = StoryObj<DeleteCustomerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
