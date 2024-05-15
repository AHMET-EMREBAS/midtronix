import type { Meta, StoryObj } from '@storybook/angular';
import { MessageToolbarComponent } from './message-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MessageToolbarComponent> = {
  component: MessageToolbarComponent,
  title: 'MessageToolbarComponent',
};
export default meta;
type Story = StoryObj<MessageToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
