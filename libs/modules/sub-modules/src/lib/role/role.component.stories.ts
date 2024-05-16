import type { Meta, StoryObj } from '@storybook/angular';
import { RoleComponent } from './role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RoleComponent> = {
  component: RoleComponent,
  title: 'RoleComponent',
};
export default meta;
type Story = StoryObj<RoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
