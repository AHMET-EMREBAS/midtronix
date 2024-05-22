import type { Meta, StoryObj } from '@storybook/angular';
import { DiscountToolbarComponent } from './discount-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DiscountToolbarComponent> = {
  component: DiscountToolbarComponent,
  title: 'DiscountToolbarComponent',
};
export default meta;
type Story = StoryObj<DiscountToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
