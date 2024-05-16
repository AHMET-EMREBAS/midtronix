import type { Meta, StoryObj } from '@storybook/angular';
import { ViewMessageComponent } from './view-messages.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewMessageComponent> = {
  component: ViewMessageComponent,
  title: 'ViewMessageComponent',
};
export default meta;
type Story = StoryObj<ViewMessageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
