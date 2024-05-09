import type { Meta, StoryObj } from '@storybook/angular';
import { InputBaseComponent } from './input-base.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputBaseComponent> = {
  component: InputBaseComponent,
  title: 'InputBaseComponent',
};
export default meta;
type Story = StoryObj<InputBaseComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-base works!/gi)).toBeTruthy();
  },
};
