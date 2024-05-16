import type { Meta, StoryObj } from '@storybook/angular';
import { CreateProjectComponent } from './create-project.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateProjectComponent> = {
  component: CreateProjectComponent,
  title: 'CreateProjectComponent',
};
export default meta;
type Story = StoryObj<CreateProjectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
