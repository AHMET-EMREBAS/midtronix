import type { Meta, StoryObj } from '@storybook/angular';
import { ProductImageToolbarComponent } from './product-image-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductImageToolbarComponent> = {
  component: ProductImageToolbarComponent,
  title: 'ProductImageToolbarComponent',
};
export default meta;
type Story = StoryObj<ProductImageToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
