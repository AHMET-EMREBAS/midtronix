import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateCustomerAddressComponent } from './update-customer-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateCustomerAddressComponent> = {
  component: UpdateCustomerAddressComponent,
  title: 'UpdateCustomerAddressComponent',
};
export default meta;
type Story = StoryObj<UpdateCustomerAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
