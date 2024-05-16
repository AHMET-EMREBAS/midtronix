import type { Meta, StoryObj } from '@storybook/angular';
import { CreateSprintComponent } from './create-sprint.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateSprintComponent> = {
  component: CreateSprintComponent,
  title: 'CreateSprintComponent',
};
export default meta;
type Story = StoryObj<CreateSprintComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
