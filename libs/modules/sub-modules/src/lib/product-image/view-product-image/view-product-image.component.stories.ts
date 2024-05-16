import type { Meta, StoryObj } from '@storybook/angular';
import { ViewProductImageComponent } from './view-product-images.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewProductImageComponent> = {
  component: ViewProductImageComponent,
  title: 'ViewProductImageComponent',
};
export default meta;
type Story = StoryObj<ViewProductImageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
