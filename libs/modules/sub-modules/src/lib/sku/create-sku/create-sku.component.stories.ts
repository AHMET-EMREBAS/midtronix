import type { Meta, StoryObj } from '@storybook/angular';
import { CreateSkuComponent } from './create-sku.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateSkuComponent> = {
  component: CreateSkuComponent,
  title: 'CreateSkuComponent',
};
export default meta;
type Story = StoryObj<CreateSkuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
