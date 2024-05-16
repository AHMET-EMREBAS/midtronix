import type { Meta, StoryObj } from '@storybook/angular';
import { CreateUserPhoneComponent } from './create-user-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateUserPhoneComponent> = {
  component: CreateUserPhoneComponent,
  title: 'CreateUserPhoneComponent',
};
export default meta;
type Story = StoryObj<CreateUserPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
