import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteUserPhoneComponent } from './delete-user-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteUserPhoneComponent> = {
  component: DeleteUserPhoneComponent,
  title: 'DeleteUserPhoneComponent',
};
export default meta;
type Story = StoryObj<DeleteUserPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
