import type { Meta, StoryObj } from '@storybook/angular';
import { DeletePermissionComponent } from './delete-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeletePermissionComponent> = {
  component: DeletePermissionComponent,
  title: 'DeletePermissionComponent',
};
export default meta;
type Story = StoryObj<DeletePermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
