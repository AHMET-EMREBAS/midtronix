import type { Meta, StoryObj } from '@storybook/angular';
import { PriceToolbarComponent } from './price-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PriceToolbarComponent> = {
  component: PriceToolbarComponent,
  title: 'PriceToolbarComponent',
};
export default meta;
type Story = StoryObj<PriceToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
