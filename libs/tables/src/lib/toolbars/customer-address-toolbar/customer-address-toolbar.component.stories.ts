import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerAddressToolbarComponent } from './customer-address-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerAddressToolbarComponent> = {
  component: CustomerAddressToolbarComponent,
  title: 'CustomerAddressToolbarComponent',
};
export default meta;
type Story = StoryObj<CustomerAddressToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
