import type { Meta, StoryObj } from '@storybook/angular';
import { ViewSprintComponent } from './view-sprints.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewSprintComponent> = {
  component: ViewSprintComponent,
  title: 'ViewSprintComponent',
};
export default meta;
type Story = StoryObj<ViewSprintComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
