import type { Meta, StoryObj } from '@storybook/angular';
import { PriceLevelToolbarComponent } from './price-level-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PriceLevelToolbarComponent> = {
  component: PriceLevelToolbarComponent,
  title: 'PriceLevelToolbarComponent',
};
export default meta;
type Story = StoryObj<PriceLevelToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
