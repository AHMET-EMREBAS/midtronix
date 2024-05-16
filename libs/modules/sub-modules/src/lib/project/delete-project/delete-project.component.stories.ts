import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteProjectComponent } from './delete-project.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteProjectComponent> = {
  component: DeleteProjectComponent,
  title: 'DeleteProjectComponent',
};
export default meta;
type Story = StoryObj<DeleteProjectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
