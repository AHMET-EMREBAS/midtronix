import type { Meta, StoryObj } from '@storybook/angular';
import { InputButtonToggleComponent } from './input-button-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputButtonToggleComponent> = {
  component: InputButtonToggleComponent,
  title: 'InputButtonToggleComponent',
};
export default meta;
type Story = StoryObj<InputButtonToggleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-button-toggle works!/gi)).toBeTruthy();
  },
};
