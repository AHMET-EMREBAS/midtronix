import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardUserPhoneComponent } from './dashboard-user-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardUserPhoneComponent> = {
  component: DashboardUserPhoneComponent,
  title: 'DashboardUserPhoneComponent',
};
export default meta;
type Story = StoryObj<DashboardUserPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-user-phone works!/gi)).toBeTruthy();
  },
};
