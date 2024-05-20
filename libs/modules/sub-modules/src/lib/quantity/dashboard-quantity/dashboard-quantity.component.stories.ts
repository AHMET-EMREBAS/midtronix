import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardQuantityComponent } from './dashboard-quantity.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardQuantityComponent> = {
  component: DashboardQuantityComponent,
  title: 'DashboardQuantityComponent',
};
export default meta;
type Story = StoryObj<DashboardQuantityComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-quantity works!/gi)).toBeTruthy();
  },
};
