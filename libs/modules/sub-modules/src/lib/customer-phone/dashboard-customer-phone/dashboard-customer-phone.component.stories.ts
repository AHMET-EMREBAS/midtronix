import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardCustomerPhoneComponent } from './dashboard-customer-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardCustomerPhoneComponent> = {
  component: DashboardCustomerPhoneComponent,
  title: 'DashboardCustomerPhoneComponent',
};
export default meta;
type Story = StoryObj<DashboardCustomerPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-customer-phone works!/gi)).toBeTruthy();
  },
};
