import type { Meta, StoryObj } from '@storybook/angular';
import { CreateCustomerEmailComponent } from './create-customer-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateCustomerEmailComponent> = {
  component: CreateCustomerEmailComponent,
  title: 'CreateCustomerEmailComponent',
};
export default meta;
type Story = StoryObj<CreateCustomerEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
