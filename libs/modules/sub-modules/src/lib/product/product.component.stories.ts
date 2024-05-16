import type { Meta, StoryObj } from '@storybook/angular';
import { ProductComponent } from './product.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductComponent> = {
  component: ProductComponent,
  title: 'ProductComponent',
};
export default meta;
type Story = StoryObj<ProductComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
