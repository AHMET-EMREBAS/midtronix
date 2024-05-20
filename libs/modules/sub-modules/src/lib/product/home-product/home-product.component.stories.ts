import type { Meta, StoryObj } from '@storybook/angular';
import { HomeProductComponent } from './home-product.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeProductComponent> = {
  component: HomeProductComponent,
  title: 'HomeProductComponent',
};
export default meta;
type Story = StoryObj<HomeProductComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-product works!/gi)).toBeTruthy();
  },
};
