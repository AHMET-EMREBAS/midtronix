import type { Meta, StoryObj } from '@storybook/angular';
import { ViewProductVideoComponent } from './view-product-videos.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewProductVideoComponent> = {
  component: ViewProductVideoComponent,
  title: 'ViewProductVideoComponent',
};
export default meta;
type Story = StoryObj<ViewProductVideoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
