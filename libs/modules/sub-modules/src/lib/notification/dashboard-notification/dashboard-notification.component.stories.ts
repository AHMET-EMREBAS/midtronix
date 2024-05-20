import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardNotificationComponent } from './dashboard-notification.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardNotificationComponent> = {
  component: DashboardNotificationComponent,
  title: 'DashboardNotificationComponent',
};
export default meta;
type Story = StoryObj<DashboardNotificationComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-notification works!/gi)).toBeTruthy();
  },
};
