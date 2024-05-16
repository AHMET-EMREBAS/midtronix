import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteRoleComponent } from './delete-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteRoleComponent> = {
  component: DeleteRoleComponent,
  title: 'DeleteRoleComponent',
};
export default meta;
type Story = StoryObj<DeleteRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
