import type { Meta, StoryObj } from '@storybook/angular';
import { HomeSkuComponent } from './home-sku.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeSkuComponent> = {
  component: HomeSkuComponent,
  title: 'HomeSkuComponent',
};
export default meta;
type Story = StoryObj<HomeSkuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-sku works!/gi)).toBeTruthy();
  },
};
