import type { Meta, StoryObj } from '@storybook/angular';
import { HomeQuantityComponent } from './home-quantity.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeQuantityComponent> = {
  component: HomeQuantityComponent,
  title: 'HomeQuantityComponent',
};
export default meta;
type Story = StoryObj<HomeQuantityComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-quantity works!/gi)).toBeTruthy();
  },
};
