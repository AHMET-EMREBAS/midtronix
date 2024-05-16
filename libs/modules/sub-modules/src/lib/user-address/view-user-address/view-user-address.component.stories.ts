import type { Meta, StoryObj } from '@storybook/angular';
import { ViewUserAddressComponent } from './view-user-addresss.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewUserAddressComponent> = {
  component: ViewUserAddressComponent,
  title: 'ViewUserAddressComponent',
};
export default meta;
type Story = StoryObj<ViewUserAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
