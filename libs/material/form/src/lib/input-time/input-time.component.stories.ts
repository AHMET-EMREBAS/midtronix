import type { Meta, StoryObj } from '@storybook/angular';
import { InputTimeComponent } from './input-time.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputTimeComponent> = {
  component: InputTimeComponent,
  title: 'InputTimeComponent',
};
export default meta;
type Story = StoryObj<InputTimeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-time works!/gi)).toBeTruthy();
  },
};
