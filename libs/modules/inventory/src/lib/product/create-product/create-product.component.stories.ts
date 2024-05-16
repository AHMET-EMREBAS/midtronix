import type { Meta, StoryObj } from '@storybook/angular';
import { CreateProductComponent } from './create-product.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateProductComponent> = {
  component: CreateProductComponent,
  title: 'CreateProductComponent',
};
export default meta;
type Story = StoryObj<CreateProductComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/create-product works!/gi)).toBeTruthy();
  },
};
