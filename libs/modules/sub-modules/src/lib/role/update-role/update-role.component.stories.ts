import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateRoleComponent } from './update-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateRoleComponent> = {
  component: UpdateRoleComponent,
  title: 'UpdateRoleComponent',
};
export default meta;
type Story = StoryObj<UpdateRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
