import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteProductImageComponent } from './delete-product-image.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteProductImageComponent> = {
  component: DeleteProductImageComponent,
  title: 'DeleteProductImageComponent',
};
export default meta;
type Story = StoryObj<DeleteProductImageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
