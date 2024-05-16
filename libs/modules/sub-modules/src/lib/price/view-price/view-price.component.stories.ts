import type { Meta, StoryObj } from '@storybook/angular';
import { ViewPriceComponent } from './view-price.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewPriceComponent> = {
  component: ViewPriceComponent,
  title: 'ViewPriceComponent',
};
export default meta;
type Story = StoryObj<ViewPriceComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
