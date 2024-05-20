import type { Meta, StoryObj } from '@storybook/angular';
import { HomeCategoryComponent } from './home-category.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeCategoryComponent> = {
  component: HomeCategoryComponent,
  title: 'HomeCategoryComponent',
};
export default meta;
type Story = StoryObj<HomeCategoryComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-category works!/gi)).toBeTruthy();
  },
};
