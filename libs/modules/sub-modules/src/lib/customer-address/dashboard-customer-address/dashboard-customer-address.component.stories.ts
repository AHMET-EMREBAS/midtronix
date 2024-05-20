import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardCustomerAddressComponent } from './dashboard-customer-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardCustomerAddressComponent> = {
  component: DashboardCustomerAddressComponent,
  title: 'DashboardCustomerAddressComponent',
};
export default meta;
type Story = StoryObj<DashboardCustomerAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/dashboard-customer-address works!/gi)
    ).toBeTruthy();
  },
};
