import type { Meta, StoryObj } from '@storybook/angular';
import { InputRadioComponent } from './input-radio.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputRadioComponent> = {
  component: InputRadioComponent,
  title: 'InputRadioComponent',
};
export default meta;
type Story = StoryObj<InputRadioComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-radio works!/gi)).toBeTruthy();
  },
};
