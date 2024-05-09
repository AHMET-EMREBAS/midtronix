import type { Meta, StoryObj } from '@storybook/angular';
import { InputCheckboxComponent } from './input-checkbox.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputCheckboxComponent> = {
  component: InputCheckboxComponent,
  title: 'InputCheckboxComponent',
};
export default meta;
type Story = StoryObj<InputCheckboxComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-checkbox works!/gi)).toBeTruthy();
  },
};
