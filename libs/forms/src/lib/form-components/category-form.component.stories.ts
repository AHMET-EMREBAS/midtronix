import type { Meta, StoryObj } from '@storybook/angular';
import { CategoryFormComponent } from './category-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CategoryFormComponent> = {
  component: CategoryFormComponent,
  title: 'CategoryFormComponent',
};
export default meta;
type Story = StoryObj<CategoryFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/category-form works!/gi)).toBeTruthy();
  },
};
