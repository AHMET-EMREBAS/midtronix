import type { Meta, StoryObj } from '@storybook/angular';
import { RoleToolbarComponent } from './role-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RoleToolbarComponent> = {
  component: RoleToolbarComponent,
  title: 'RoleToolbarComponent',
};
export default meta;
type Story = StoryObj<RoleToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
