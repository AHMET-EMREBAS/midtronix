import type { Meta, StoryObj } from '@storybook/angular';
import { SprintComponent } from './sprint.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SprintComponent> = {
  component: SprintComponent,
  title: 'SprintComponent',
};
export default meta;
type Story = StoryObj<SprintComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
