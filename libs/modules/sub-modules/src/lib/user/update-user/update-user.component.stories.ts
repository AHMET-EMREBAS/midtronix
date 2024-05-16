import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateUserComponent } from './update-user.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateUserComponent> = {
  component: UpdateUserComponent,
  title: 'UpdateUserComponent',
};
export default meta;
type Story = StoryObj<UpdateUserComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
