import type { Meta, StoryObj } from '@storybook/angular';
import { PermissionToolbarComponent } from './permission-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PermissionToolbarComponent> = {
  component: PermissionToolbarComponent,
  title: 'PermissionToolbarComponent',
};
export default meta;
type Story = StoryObj<PermissionToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
