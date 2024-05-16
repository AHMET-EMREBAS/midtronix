import type { Meta, StoryObj } from '@storybook/angular';
import { CreateProductImageComponent } from './create-product-image.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateProductImageComponent> = {
  component: CreateProductImageComponent,
  title: 'CreateProductImageComponent',
};
export default meta;
type Story = StoryObj<CreateProductImageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
