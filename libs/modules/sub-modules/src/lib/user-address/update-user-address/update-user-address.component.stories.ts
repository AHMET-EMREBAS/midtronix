import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateUserAddressComponent } from './update-user-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateUserAddressComponent> = {
  component: UpdateUserAddressComponent,
  title: 'UpdateUserAddressComponent',
};
export default meta;
type Story = StoryObj<UpdateUserAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
