import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateDiscountComponent } from './update-discount.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateDiscountComponent> = {
  component: UpdateDiscountComponent,
  title: 'UpdateDiscountComponent',
};
export default meta;
type Story = StoryObj<UpdateDiscountComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
