import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardMessageComponent } from './dashboard-message.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardMessageComponent> = {
  component: DashboardMessageComponent,
  title: 'DashboardMessageComponent',
};
export default meta;
type Story = StoryObj<DashboardMessageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-message works!/gi)).toBeTruthy();
  },
};
