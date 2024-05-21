import type { Meta, StoryObj } from '@storybook/angular';
import { CartToolbarComponent } from './cart-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CartToolbarComponent> = {
  component: CartToolbarComponent,
  title: 'CartToolbarComponent',
};
export default meta;
type Story = StoryObj<CartToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
