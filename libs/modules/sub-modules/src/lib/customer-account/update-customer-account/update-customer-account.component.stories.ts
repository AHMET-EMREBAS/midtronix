import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateCustomerAccountComponent } from './update-customer-account.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateCustomerAccountComponent> = {
  component: UpdateCustomerAccountComponent,
  title: 'UpdateCustomerAccountComponent',
};
export default meta;
type Story = StoryObj<UpdateCustomerAccountComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
