import type { Meta, StoryObj } from '@storybook/angular';
import { UpdatePermissionComponent } from './update-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdatePermissionComponent> = {
  component: UpdatePermissionComponent,
  title: 'UpdatePermissionComponent',
};
export default meta;
type Story = StoryObj<UpdatePermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
