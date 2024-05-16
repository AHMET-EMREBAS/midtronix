import type { Meta, StoryObj } from '@storybook/angular';
import { UserAddressComponent } from './user-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserAddressComponent> = {
  component: UserAddressComponent,
  title: 'UserAddressComponent',
};
export default meta;
type Story = StoryObj<UserAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
