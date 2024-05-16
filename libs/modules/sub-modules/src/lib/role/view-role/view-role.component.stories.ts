import type { Meta, StoryObj } from '@storybook/angular';
import { ViewRoleComponent } from './view-roles.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewRoleComponent> = {
  component: ViewRoleComponent,
  title: 'ViewRoleComponent',
};
export default meta;
type Story = StoryObj<ViewRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
