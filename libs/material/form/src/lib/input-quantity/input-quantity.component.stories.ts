import type { Meta, StoryObj } from '@storybook/angular';
import { InputQuantityComponent } from './input-quantity.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputQuantityComponent> = {
  component: InputQuantityComponent,
  title: 'InputQuantityComponent',
};
export default meta;
type Story = StoryObj<InputQuantityComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-quantity works!/gi)).toBeTruthy();
  },
};
