import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateCartComponent } from './update-cart.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateCartComponent> = {
  component: UpdateCartComponent,
  title: 'UpdateCartComponent',
};
export default meta;
type Story = StoryObj<UpdateCartComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
