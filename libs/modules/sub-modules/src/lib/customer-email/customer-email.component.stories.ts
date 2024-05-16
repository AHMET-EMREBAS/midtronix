import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerEmailComponent } from './customer-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerEmailComponent> = {
  component: CustomerEmailComponent,
  title: 'CustomerEmailComponent',
};
export default meta;
type Story = StoryObj<CustomerEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
