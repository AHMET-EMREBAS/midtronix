import type { Meta, StoryObj } from '@storybook/angular';
import { FullscreenDirectiveComponent } from './fullscreen.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FullscreenDirectiveComponent> = {
  component: FullscreenDirectiveComponent,
  title: 'FullscreenComponent',
};
export default meta;
type Story = StoryObj<FullscreenDirectiveComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
