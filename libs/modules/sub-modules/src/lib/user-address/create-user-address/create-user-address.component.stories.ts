import type { Meta, StoryObj } from '@storybook/angular';
import { CreateUserAddressComponent } from './create-user-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateUserAddressComponent> = {
  component: CreateUserAddressComponent,
  title: 'CreateUserAddressComponent',
};
export default meta;
type Story = StoryObj<CreateUserAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
