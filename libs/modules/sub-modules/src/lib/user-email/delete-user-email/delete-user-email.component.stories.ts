import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteUserEmailComponent } from './delete-user-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteUserEmailComponent> = {
  component: DeleteUserEmailComponent,
  title: 'DeleteUserEmailComponent',
};
export default meta;
type Story = StoryObj<DeleteUserEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
