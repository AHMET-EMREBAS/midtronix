import type { Meta, StoryObj } from '@storybook/angular';
import { HomeRoleComponent } from './home-role.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeRoleComponent> = {
  component: HomeRoleComponent,
  title: 'HomeRoleComponent',
};
export default meta;
type Story = StoryObj<HomeRoleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-role works!/gi)).toBeTruthy();
  },
};
