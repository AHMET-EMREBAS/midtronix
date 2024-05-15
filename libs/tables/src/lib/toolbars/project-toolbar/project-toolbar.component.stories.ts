import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectToolbarComponent } from './project-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProjectToolbarComponent> = {
  component: ProjectToolbarComponent,
  title: 'ProjectToolbarComponent',
};
export default meta;
type Story = StoryObj<ProjectToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
