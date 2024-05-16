import type { Meta, StoryObj } from '@storybook/angular';
import { PermissionComponent } from './permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PermissionComponent> = {
  component: PermissionComponent,
  title: 'PermissionComponent',
};
export default meta;
type Story = StoryObj<PermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
