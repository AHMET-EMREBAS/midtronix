import type { Meta, StoryObj } from '@storybook/angular';
import { UserEmailComponent } from './user-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserEmailComponent> = {
  component: UserEmailComponent,
  title: 'UserEmailComponent',
};
export default meta;
type Story = StoryObj<UserEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
