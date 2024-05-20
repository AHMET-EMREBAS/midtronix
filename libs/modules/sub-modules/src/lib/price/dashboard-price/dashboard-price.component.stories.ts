import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardPriceComponent } from './dashboard-price.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardPriceComponent> = {
  component: DashboardPriceComponent,
  title: 'DashboardPriceComponent',
};
export default meta;
type Story = StoryObj<DashboardPriceComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-price works!/gi)).toBeTruthy();
  },
};
