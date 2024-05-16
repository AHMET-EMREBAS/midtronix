import type { Meta, StoryObj } from '@storybook/angular';
import { ViewSkuComponent } from './view-skus.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewSkuComponent> = {
  component: ViewSkuComponent,
  title: 'ViewSkuComponent',
};
export default meta;
type Story = StoryObj<ViewSkuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
