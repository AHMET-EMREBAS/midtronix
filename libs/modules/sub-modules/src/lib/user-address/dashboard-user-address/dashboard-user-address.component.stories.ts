import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardUserAddressComponent } from './dashboard-user-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardUserAddressComponent> = {
  component: DashboardUserAddressComponent,
  title: 'DashboardUserAddressComponent',
};
export default meta;
type Story = StoryObj<DashboardUserAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-user-address works!/gi)).toBeTruthy();
  },
};
