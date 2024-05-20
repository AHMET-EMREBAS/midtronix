import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardCustomerComponent } from './dashboard-customer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardCustomerComponent> = {
  component: DashboardCustomerComponent,
  title: 'DashboardCustomerComponent',
};
export default meta;
type Story = StoryObj<DashboardCustomerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-customer works!/gi)).toBeTruthy();
  },
};
