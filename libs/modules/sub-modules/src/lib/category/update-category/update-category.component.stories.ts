import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateCategoryComponent } from './update-category.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateCategoryComponent> = {
  component: UpdateCategoryComponent,
  title: 'UpdateCategoryComponent',
};
export default meta;
type Story = StoryObj<UpdateCategoryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
