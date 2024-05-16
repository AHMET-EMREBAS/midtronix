import type { Meta, StoryObj } from '@storybook/angular';
import { UserPhoneComponent } from './user-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserPhoneComponent> = {
  component: UserPhoneComponent,
  title: 'UserPhoneComponent',
};
export default meta;
type Story = StoryObj<UserPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
