import type { Meta, StoryObj } from '@storybook/angular';
import { QuantityToolbarComponent } from './quantity-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<QuantityToolbarComponent> = {
  component: QuantityToolbarComponent,
  title: 'QuantityToolbarComponent',
};
export default meta;
type Story = StoryObj<QuantityToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
