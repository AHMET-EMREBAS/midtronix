import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateProductComponent } from './update-product.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateProductComponent> = {
  component: UpdateProductComponent,
  title: 'UpdateProductComponent',
};
export default meta;
type Story = StoryObj<UpdateProductComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
