import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteProductComponent } from './delete-product.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteProductComponent> = {
  component: DeleteProductComponent,
  title: 'DeleteProductComponent',
};
export default meta;
type Story = StoryObj<DeleteProductComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
