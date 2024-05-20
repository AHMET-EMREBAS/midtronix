import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardCustomerEmailComponent } from './dashboard-customer-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardCustomerEmailComponent> = {
  component: DashboardCustomerEmailComponent,
  title: 'DashboardCustomerEmailComponent',
};
export default meta;
type Story = StoryObj<DashboardCustomerEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-customer-email works!/gi)).toBeTruthy();
  },
};
