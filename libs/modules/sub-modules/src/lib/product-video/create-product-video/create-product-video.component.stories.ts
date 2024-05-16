import type { Meta, StoryObj } from '@storybook/angular';
import { CreateProductVideoComponent } from './create-product-video.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateProductVideoComponent> = {
  component: CreateProductVideoComponent,
  title: 'CreateProductVideoComponent',
};
export default meta;
type Story = StoryObj<CreateProductVideoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
