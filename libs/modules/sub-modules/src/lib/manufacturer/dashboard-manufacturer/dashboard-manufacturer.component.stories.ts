import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardManufacturerComponent } from './dashboard-manufacturer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardManufacturerComponent> = {
  component: DashboardManufacturerComponent,
  title: 'DashboardManufacturerComponent',
};
export default meta;
type Story = StoryObj<DashboardManufacturerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-manufacturer works!/gi)).toBeTruthy();
  },
};
