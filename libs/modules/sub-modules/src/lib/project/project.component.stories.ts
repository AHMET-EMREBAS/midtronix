import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectComponent } from './project.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProjectComponent> = {
  component: ProjectComponent,
  title: 'ProjectComponent',
};
export default meta;
type Story = StoryObj<ProjectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
