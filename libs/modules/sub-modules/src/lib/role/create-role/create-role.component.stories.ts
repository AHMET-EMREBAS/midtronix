import type { Meta, StoryObj } from '@storybook/angular';
import { CreateRoleComponent } from './create-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateRoleComponent> = {
  component: CreateRoleComponent,
  title: 'CreateRoleComponent',
};
export default meta;
type Story = StoryObj<CreateRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
