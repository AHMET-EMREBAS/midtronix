import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardTaskComponent } from './dashboard-task.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardTaskComponent> = {
  component: DashboardTaskComponent,
  title: 'DashboardTaskComponent',
};
export default meta;
type Story = StoryObj<DashboardTaskComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-task works!/gi)).toBeTruthy();
  },
};
