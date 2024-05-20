import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardUserEmailComponent } from './dashboard-user-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DashboardUserEmailComponent> = {
  component: DashboardUserEmailComponent,
  title: 'DashboardUserEmailComponent',
};
export default meta;
type Story = StoryObj<DashboardUserEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/dashboard-user-email works!/gi)).toBeTruthy();
  },
};
