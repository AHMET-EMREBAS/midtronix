import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardUserComponent } from './dashboard-user.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardUserComponent> = {
  component: DashboardUserComponent,
  title: 'DashboardUserComponent',
};
export default meta;
type Story = StoryObj<DashboardUserComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-user works!/gi)).toBeTruthy();
  },
};
