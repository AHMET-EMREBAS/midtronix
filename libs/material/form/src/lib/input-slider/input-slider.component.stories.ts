import type { Meta, StoryObj } from '@storybook/angular';
import { InputSliderComponent } from './input-slider.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputSliderComponent> = {
  component: InputSliderComponent,
  title: 'InputSliderComponent',
};
export default meta;
type Story = StoryObj<InputSliderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-slider works!/gi)).toBeTruthy();
  },
};
