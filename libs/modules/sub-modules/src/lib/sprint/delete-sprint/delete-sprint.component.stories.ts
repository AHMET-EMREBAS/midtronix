import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteSprintComponent } from './delete-sprint.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteSprintComponent> = {
  component: DeleteSprintComponent,
  title: 'DeleteSprintComponent',
};
export default meta;
type Story = StoryObj<DeleteSprintComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
