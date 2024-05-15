import type { Meta, StoryObj } from '@storybook/angular';
import { StatusbarComponent } from './statusbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StatusbarComponent> = {
  component: StatusbarComponent,
  title: 'StatusbarComponent',
};
export default meta;
type Story = StoryObj<StatusbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/statusbar works!/gi)).toBeTruthy();
  },
};
