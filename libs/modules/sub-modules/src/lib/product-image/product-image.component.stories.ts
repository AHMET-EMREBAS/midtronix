import type { Meta, StoryObj } from '@storybook/angular';
import { ProductImageComponent } from './product-image.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductImageComponent> = {
  component: ProductImageComponent,
  title: 'ProductImageComponent',
};
export default meta;
type Story = StoryObj<ProductImageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
