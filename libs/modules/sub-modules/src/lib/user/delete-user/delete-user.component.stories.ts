import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteUserComponent } from './delete-user.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteUserComponent> = {
  component: DeleteUserComponent,
  title: 'DeleteUserComponent',
};
export default meta;
type Story = StoryObj<DeleteUserComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
