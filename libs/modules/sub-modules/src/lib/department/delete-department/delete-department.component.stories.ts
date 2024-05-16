import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteDepartmentComponent } from './delete-department.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteDepartmentComponent> = {
  component: DeleteDepartmentComponent,
  title: 'DeleteDepartmentComponent',
};
export default meta;
type Story = StoryObj<DeleteDepartmentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
