import type { Meta, StoryObj } from '@storybook/angular';
import { AppLayoutComponent } from './app-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AppLayoutComponent> = {
  component: AppLayoutComponent,
  title: 'AppLayoutComponent',
};
export default meta;
type Story = StoryObj<AppLayoutComponent>;

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
    expect(canvas.getByText(/app-layout works!/gi)).toBeTruthy();
  },
};
