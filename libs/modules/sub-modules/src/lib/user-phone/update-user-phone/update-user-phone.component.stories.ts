import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateUserPhoneComponent } from './update-user-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateUserPhoneComponent> = {
  component: UpdateUserPhoneComponent,
  title: 'UpdateUserPhoneComponent',
};
export default meta;
type Story = StoryObj<UpdateUserPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
