import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateMessageComponent } from './update-message.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateMessageComponent> = {
  component: UpdateMessageComponent,
  title: 'UpdateMessageComponent',
};
export default meta;
type Story = StoryObj<UpdateMessageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
