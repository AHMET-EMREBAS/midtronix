import type { Meta, StoryObj } from '@storybook/angular';
import { InputDateComponent } from './input-date.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputDateComponent> = {
  component: InputDateComponent,
  title: 'InputDateComponent',
};
export default meta;
type Story = StoryObj<InputDateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-date works!/gi)).toBeTruthy();
  },
};
