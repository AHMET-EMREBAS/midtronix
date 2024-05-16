import type { Meta, StoryObj } from '@storybook/angular';
import { CreateUserComponent } from './create-user.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateUserComponent> = {
  component: CreateUserComponent,
  title: 'CreateUserComponent',
};
export default meta;
type Story = StoryObj<CreateUserComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
