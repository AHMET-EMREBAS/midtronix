import type { Meta, StoryObj } from '@storybook/angular';
import { DepartmentToolbarComponent } from './department-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DepartmentToolbarComponent> = {
  component: DepartmentToolbarComponent,
  title: 'DepartmentToolbarComponent',
};
export default meta;
type Story = StoryObj<DepartmentToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
