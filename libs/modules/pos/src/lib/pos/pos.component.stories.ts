import type { Meta, StoryObj } from '@storybook/angular';
import { PosComponent } from './pos.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PosComponent> = {
  component: PosComponent,
  title: 'PosComponent',
};
export default meta;
type Story = StoryObj<PosComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pos works!/gi)).toBeTruthy();
  },
};
