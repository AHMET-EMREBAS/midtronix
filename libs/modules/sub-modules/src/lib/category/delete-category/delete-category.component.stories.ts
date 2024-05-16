import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteCategoryComponent } from './delete-category.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteCategoryComponent> = {
  component: DeleteCategoryComponent,
  title: 'DeleteCategoryComponent',
};
export default meta;
type Story = StoryObj<DeleteCategoryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
