import type { Meta, StoryObj } from '@storybook/angular';
import { PosLayoutComponent } from './pos-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PosLayoutComponent> = {
  component: PosLayoutComponent,
  title: 'PosLayoutComponent',
};
export default meta;
type Story = StoryObj<PosLayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pos-layout works!/gi)).toBeTruthy();
  },
};
