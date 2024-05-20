import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardSkuComponent } from './dashboard-sku.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardSkuComponent> = {
  component: DashboardSkuComponent,
  title: 'DashboardSkuComponent',
};
export default meta;
type Story = StoryObj<DashboardSkuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-sku works!/gi)).toBeTruthy();
  },
};
