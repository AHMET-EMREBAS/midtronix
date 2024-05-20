import type { Meta, StoryObj } from '@storybook/angular';
import { HomeCustomerAddressComponent } from './home-customer-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeCustomerAddressComponent> = {
  component: HomeCustomerAddressComponent,
  title: 'HomeCustomerAddressComponent',
};
export default meta;
type Story = StoryObj<HomeCustomerAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-customer-address works!/gi)).toBeTruthy();
  },
};
