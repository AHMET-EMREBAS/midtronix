import type { Meta, StoryObj } from '@storybook/angular';
import { CreatePermissionComponent } from './create-permission.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreatePermissionComponent> = {
  component: CreatePermissionComponent,
  title: 'CreatePermissionComponent',
};
export default meta;
type Story = StoryObj<CreatePermissionComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
