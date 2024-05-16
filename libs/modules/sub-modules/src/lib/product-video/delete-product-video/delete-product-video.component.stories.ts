import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteProductVideoComponent } from './delete-product-video.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteProductVideoComponent> = {
  component: DeleteProductVideoComponent,
  title: 'DeleteProductVideoComponent',
};
export default meta;
type Story = StoryObj<DeleteProductVideoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
