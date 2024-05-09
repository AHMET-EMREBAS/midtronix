import type { Meta, StoryObj } from '@storybook/angular';
import { InputSelectComponent } from './input-select.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputSelectComponent> = {
  component: InputSelectComponent,
  title: 'InputSelectComponent',
};
export default meta;
type Story = StoryObj<InputSelectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-select works!/gi)).toBeTruthy();
  },
};
