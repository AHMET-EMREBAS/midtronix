import type { Meta, StoryObj } from '@storybook/angular';
import { BaseAppLayoutComponent } from './base-app-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BaseAppLayoutComponent> = {
  component: BaseAppLayoutComponent,
  title: 'BaseAppLayoutComponent',
};
export default meta;
type Story = StoryObj<BaseAppLayoutComponent>;

export const Primary: Story = {
  args: {
    rightSidenavIcon: 'settings',
    progressValue: 100,
  },
};

export const Heading: Story = {
  args: {
    rightSidenavIcon: 'settings',
    progressValue: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/base-app-layout works!/gi)).toBeTruthy();
  },
};
