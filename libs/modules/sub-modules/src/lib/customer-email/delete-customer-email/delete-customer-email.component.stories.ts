import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteCustomerEmailComponent } from './delete-customer-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteCustomerEmailComponent> = {
  component: DeleteCustomerEmailComponent,
  title: 'DeleteCustomerEmailComponent',
};
export default meta;
type Story = StoryObj<DeleteCustomerEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
