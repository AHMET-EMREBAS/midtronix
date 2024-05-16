import type { Meta, StoryObj } from '@storybook/angular';
import { CreateUserEmailComponent } from './create-user-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateUserEmailComponent> = {
  component: CreateUserEmailComponent,
  title: 'CreateUserEmailComponent',
};
export default meta;
type Story = StoryObj<CreateUserEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
