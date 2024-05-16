import type { Meta, StoryObj } from '@storybook/angular';
import { CategoryComponent } from './category.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CategoryComponent> = {
  component: CategoryComponent,
  title: 'CategoryComponent',
};
export default meta;
type Story = StoryObj<CategoryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
