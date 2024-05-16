import type { Meta, StoryObj } from '@storybook/angular';
import { ViewCustomerAddressComponent } from './view-customer-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewCustomerAddressComponent> = {
  component: ViewCustomerAddressComponent,
  title: 'ViewCustomerAddressComponent',
};
export default meta;
type Story = StoryObj<ViewCustomerAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
