import type { Meta, StoryObj } from '@storybook/angular';
import { UserAddressToolbarComponent } from './user-address-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserAddressToolbarComponent> = {
  component: UserAddressToolbarComponent,
  title: 'UserAddressToolbarComponent',
};
export default meta;
type Story = StoryObj<UserAddressToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
