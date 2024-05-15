import type { Meta, StoryObj } from '@storybook/angular';
import { CategorySearchComponent } from './category-search.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CategorySearchComponent> = {
  component: CategorySearchComponent,
  title: 'CategorySearchComponent',
};
export default meta;
type Story = StoryObj<CategorySearchComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/category-search works!/gi)).toBeTruthy();
  },
};
