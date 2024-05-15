import type { Meta, StoryObj } from '@storybook/angular';
import { CategoryToolbarComponent } from './category-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CategoryToolbarComponent> = {
  component: CategoryToolbarComponent,
  title: 'CategoryToolbarComponent',
};
export default meta;
type Story = StoryObj<CategoryToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/category-toolbar works!/gi)).toBeTruthy();
  },
};
