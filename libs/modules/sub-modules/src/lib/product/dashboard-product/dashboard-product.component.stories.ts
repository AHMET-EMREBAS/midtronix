import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardProductComponent } from './dashboard-product.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardProductComponent> = {
  component: DashboardProductComponent,
  title: 'DashboardProductComponent',
};
export default meta;
type Story = StoryObj<DashboardProductComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-product works!/gi)).toBeTruthy();
  },
};
