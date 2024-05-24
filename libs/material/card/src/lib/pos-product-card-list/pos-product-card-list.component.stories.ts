import type { Meta, StoryObj } from '@storybook/angular';
import { PosProductCardListComponent } from './pos-product-card-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PosProductCardListComponent> = {
  component: PosProductCardListComponent,
  title: 'PosProductCardListComponent',
};
export default meta;
type Story = StoryObj<PosProductCardListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pos-product-card-list works!/gi)).toBeTruthy();
  },
};
