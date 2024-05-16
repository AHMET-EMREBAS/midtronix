import type { Meta, StoryObj } from '@storybook/angular';
import { ViewCategoryComponent } from './view-categorys.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewCategoryComponent> = {
  component: ViewCategoryComponent,
  title: 'ViewCategoryComponent',
};
export default meta;
type Story = StoryObj<ViewCategoryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
