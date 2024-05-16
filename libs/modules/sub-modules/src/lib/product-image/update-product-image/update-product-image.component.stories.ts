import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateProductImageComponent } from './update-product-image.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateProductImageComponent> = {
  component: UpdateProductImageComponent,
  title: 'UpdateProductImageComponent',
};
export default meta;
type Story = StoryObj<UpdateProductImageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
