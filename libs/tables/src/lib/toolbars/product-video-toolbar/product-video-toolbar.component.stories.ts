import type { Meta, StoryObj } from '@storybook/angular';
import { ProductVideoToolbarComponent } from './product-video-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductVideoToolbarComponent> = {
  component: ProductVideoToolbarComponent,
  title: 'ProductVideoToolbarComponent',
};
export default meta;
type Story = StoryObj<ProductVideoToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
