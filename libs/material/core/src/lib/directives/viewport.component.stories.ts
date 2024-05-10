import type { Meta, StoryObj } from '@storybook/angular';
import { ViewportDirectiveComponent } from './viewport.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewportDirectiveComponent> = {
  component: ViewportDirectiveComponent,
  title: 'ViewportComponent',
};
export default meta;
type Story = StoryObj<ViewportDirectiveComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/viewport works!/gi)).toBeTruthy();
  },
};
