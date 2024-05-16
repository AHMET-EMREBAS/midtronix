import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateSprintComponent } from './update-sprint.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateSprintComponent> = {
  component: UpdateSprintComponent,
  title: 'UpdateSprintComponent',
};
export default meta;
type Story = StoryObj<UpdateSprintComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
