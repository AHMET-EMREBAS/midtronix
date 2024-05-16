import type { Meta, StoryObj } from '@storybook/angular';
import { CreateMessageComponent } from './create-message.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateMessageComponent> = {
  component: CreateMessageComponent,
  title: 'CreateMessageComponent',
};
export default meta;
type Story = StoryObj<CreateMessageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
