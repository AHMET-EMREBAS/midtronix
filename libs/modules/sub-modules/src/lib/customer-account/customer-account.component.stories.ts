import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerAccountComponent } from './customer-account.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerAccountComponent> = {
  component: CustomerAccountComponent,
  title: 'CustomerAccountComponent',
};
export default meta;
type Story = StoryObj<CustomerAccountComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
