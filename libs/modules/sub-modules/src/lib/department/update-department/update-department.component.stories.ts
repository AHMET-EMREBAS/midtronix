import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateDepartmentComponent } from './update-department.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateDepartmentComponent> = {
  component: UpdateDepartmentComponent,
  title: 'UpdateDepartmentComponent',
};
export default meta;
type Story = StoryObj<UpdateDepartmentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
