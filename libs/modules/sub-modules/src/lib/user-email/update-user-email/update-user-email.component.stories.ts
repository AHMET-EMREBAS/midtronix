import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateUserEmailComponent } from './update-user-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateUserEmailComponent> = {
  component: UpdateUserEmailComponent,
  title: 'UpdateUserEmailComponent',
};
export default meta;
type Story = StoryObj<UpdateUserEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
