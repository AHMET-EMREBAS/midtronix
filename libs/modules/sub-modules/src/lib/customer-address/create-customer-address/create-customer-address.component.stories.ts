import type { Meta, StoryObj } from '@storybook/angular';
import { CreateCustomerAddressComponent } from './create-customer-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateCustomerAddressComponent> = {
  component: CreateCustomerAddressComponent,
  title: 'CreateCustomerAddressComponent',
};
export default meta;
type Story = StoryObj<CreateCustomerAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
