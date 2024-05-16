import type { Meta, StoryObj } from '@storybook/angular';
import { ViewProductsComponent } from './view-products.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewProductsComponent> = {
  component: ViewProductsComponent,
  title: 'ViewProductsComponent',
};
export default meta;
type Story = StoryObj<ViewProductsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/view-products works!/gi)).toBeTruthy();
  },
};
