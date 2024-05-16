import type { Meta, StoryObj } from '@storybook/angular';
import { HelpComponent } from './help.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HelpComponent> = {
  component: HelpComponent,
  title: 'HelpComponent',
};
export default meta;
type Story = StoryObj<HelpComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/help works!/gi)).toBeTruthy();
  },
};
