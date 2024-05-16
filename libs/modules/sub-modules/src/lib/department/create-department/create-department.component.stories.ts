import type { Meta, StoryObj } from '@storybook/angular';
import { CreateDepartmentComponent } from './create-department.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateDepartmentComponent> = {
  component: CreateDepartmentComponent,
  title: 'CreateDepartmentComponent',
};
export default meta;
type Story = StoryObj<CreateDepartmentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
