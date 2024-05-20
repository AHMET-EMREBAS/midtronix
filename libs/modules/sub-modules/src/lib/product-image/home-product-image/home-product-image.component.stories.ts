import type { Meta, StoryObj } from '@storybook/angular';
import { HomeProductImageComponent } from './home-product-image.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeProductImageComponent> = {
  component: HomeProductImageComponent,
  title: 'HomeProductImageComponent',
};
export default meta;
type Story = StoryObj<HomeProductImageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-product-image works!/gi)).toBeTruthy();
  },
};
