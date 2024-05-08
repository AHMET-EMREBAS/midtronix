import type { Meta, StoryObj } from '@storybook/angular';
import { TypingComponent } from './typing.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TypingComponent> = {
  component: TypingComponent,
  title: 'TypingComponent',
};
export default meta;
type Story = StoryObj<TypingComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/typing works!/gi)).toBeTruthy();
  },
};
