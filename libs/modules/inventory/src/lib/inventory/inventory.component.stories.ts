import type { Meta, StoryObj } from '@storybook/angular';
import { InventoryComponent } from './inventory.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InventoryComponent> = {
  component: InventoryComponent,
  title: 'InventoryComponent',
};
export default meta;
type Story = StoryObj<InventoryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/inventory works!/gi)).toBeTruthy();
  },
};
