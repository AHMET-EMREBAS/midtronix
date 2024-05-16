import type { Meta, StoryObj } from '@storybook/angular';
import { ProductVideoComponent } from './product-video.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductVideoComponent> = {
  component: ProductVideoComponent,
  title: 'ProductVideoComponent',
};
export default meta;
type Story = StoryObj<ProductVideoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
