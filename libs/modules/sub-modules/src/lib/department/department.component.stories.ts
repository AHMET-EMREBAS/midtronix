import type { Meta, StoryObj } from '@storybook/angular';
import { DepartmentComponent } from './department.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DepartmentComponent> = {
  component: DepartmentComponent,
  title: 'DepartmentComponent',
};
export default meta;
type Story = StoryObj<DepartmentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
