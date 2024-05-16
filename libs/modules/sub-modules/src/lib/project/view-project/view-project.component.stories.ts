import type { Meta, StoryObj } from '@storybook/angular';
import { ViewProjectComponent } from './view-project.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewProjectComponent> = {
  component: ViewProjectComponent,
  title: 'ViewProjectComponent',
};
export default meta;
type Story = StoryObj<ViewProjectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
