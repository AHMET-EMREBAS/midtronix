import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateSkuComponent } from './update-sku.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateSkuComponent> = {
  component: UpdateSkuComponent,
  title: 'UpdateSkuComponent',
};
export default meta;
type Story = StoryObj<UpdateSkuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
