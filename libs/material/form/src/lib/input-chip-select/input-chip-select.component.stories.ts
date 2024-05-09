import type { Meta, StoryObj } from '@storybook/angular';
import { InputChipSelectComponent } from './input-chip-select.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputChipSelectComponent> = {
  component: InputChipSelectComponent,
  title: 'InputChipSelectComponent',
};
export default meta;
type Story = StoryObj<InputChipSelectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-chip-select works!/gi)).toBeTruthy();
  },
};
