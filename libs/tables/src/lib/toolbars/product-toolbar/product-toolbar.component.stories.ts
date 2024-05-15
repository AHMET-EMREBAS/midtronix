import type { Meta, StoryObj } from '@storybook/angular';
import { ProductToolbarComponent } from './product-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductToolbarComponent> = {
  component: ProductToolbarComponent,
  title: 'ProductToolbarComponent',
};
export default meta;
type Story = StoryObj<ProductToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
