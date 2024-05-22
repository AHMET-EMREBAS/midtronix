import type { Meta, StoryObj } from '@storybook/angular';
import { DiscountComponent } from './discount.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DiscountComponent> = {
  component: DiscountComponent,
  title: 'DiscountComponent',
};
export default meta;
type Story = StoryObj<DiscountComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
