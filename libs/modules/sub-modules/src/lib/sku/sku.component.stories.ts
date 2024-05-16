import type { Meta, StoryObj } from '@storybook/angular';
import { SkuComponent } from './sku.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SkuComponent> = {
  component: SkuComponent,
  title: 'SkuComponent',
};
export default meta;
type Story = StoryObj<SkuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
