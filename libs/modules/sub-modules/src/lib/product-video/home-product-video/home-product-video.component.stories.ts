import type { Meta, StoryObj } from '@storybook/angular';
import { HomeProductVideoComponent } from './home-product-video.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeProductVideoComponent> = {
  component: HomeProductVideoComponent,
  title: 'HomeProductVideoComponent',
};
export default meta;
type Story = StoryObj<HomeProductVideoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-product-video works!/gi)).toBeTruthy();
  },
};
