import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteSkuComponent } from './delete-sku.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteSkuComponent> = {
  component: DeleteSkuComponent,
  title: 'DeleteSkuComponent',
};
export default meta;
type Story = StoryObj<DeleteSkuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
