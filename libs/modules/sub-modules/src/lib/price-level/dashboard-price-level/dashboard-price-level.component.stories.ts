import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardPriceLevelComponent } from './dashboard-price-level.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardPriceLevelComponent> = {
  component: DashboardPriceLevelComponent,
  title: 'DashboardPriceLevelComponent',
};
export default meta;
type Story = StoryObj<DashboardPriceLevelComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-price-level works!/gi)).toBeTruthy();
  },
};
