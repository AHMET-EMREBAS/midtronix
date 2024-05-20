import type { Meta, StoryObj } from '@storybook/angular';
import { HomePriceComponent } from './home-price.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomePriceComponent> = {
  component: HomePriceComponent,
  title: 'HomePriceComponent',
};
export default meta;
type Story = StoryObj<HomePriceComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-price works!/gi)).toBeTruthy();
  },
};
