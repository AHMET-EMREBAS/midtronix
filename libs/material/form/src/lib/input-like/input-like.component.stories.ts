import type { Meta, StoryObj } from '@storybook/angular';
import { InputLikeComponent } from './input-like.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputLikeComponent> = {
  component: InputLikeComponent,
  title: 'InputLikeComponent',
};
export default meta;
type Story = StoryObj<InputLikeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-like works!/gi)).toBeTruthy();
  },
};
