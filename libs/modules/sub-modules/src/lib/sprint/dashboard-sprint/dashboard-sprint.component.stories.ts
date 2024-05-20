import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardSprintComponent } from './dashboard-sprint.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardSprintComponent> = {
  component: DashboardSprintComponent,
  title: 'DashboardSprintComponent',
};
export default meta;
type Story = StoryObj<DashboardSprintComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-sprint works!/gi)).toBeTruthy();
  },
};
