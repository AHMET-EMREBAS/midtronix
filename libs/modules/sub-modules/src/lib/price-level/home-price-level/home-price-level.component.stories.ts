import type { Meta, StoryObj } from '@storybook/angular';
import { HomePriceLevelComponent } from './home-price-level.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomePriceLevelComponent> = {
  component: HomePriceLevelComponent,
  title: 'HomePriceLevelComponent',
};
export default meta;
type Story = StoryObj<HomePriceLevelComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-price-level works!/gi)).toBeTruthy();
  },
};
