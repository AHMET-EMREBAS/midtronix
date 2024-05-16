import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteUserAddressComponent } from './delete-user-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteUserAddressComponent> = {
  component: DeleteUserAddressComponent,
  title: 'DeleteUserAddressComponent',
};
export default meta;
type Story = StoryObj<DeleteUserAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
