import type { Meta, StoryObj } from '@storybook/angular';
import { SkuToolbarComponent } from './sku-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SkuToolbarComponent> = {
  component: SkuToolbarComponent,
  title: 'SkuToolbarComponent',
};
export default meta;
type Story = StoryObj<SkuToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
