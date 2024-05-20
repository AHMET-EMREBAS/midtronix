import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardDepartmentComponent } from './dashboard-department.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardDepartmentComponent> = {
  component: DashboardDepartmentComponent,
  title: 'DashboardDepartmentComponent',
};
export default meta;
type Story = StoryObj<DashboardDepartmentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-department works!/gi)).toBeTruthy();
  },
};
