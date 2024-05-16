import type { Meta, StoryObj } from '@storybook/angular';
import { ViewPermissionComponent } from './view-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewPermissionComponent> = {
  component: ViewPermissionComponent,
  title: 'ViewPermissionComponent',
};
export default meta;
type Story = StoryObj<ViewPermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
