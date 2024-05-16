import type { Meta, StoryObj } from '@storybook/angular';
import { ViewDepartmentComponent } from './view-department.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewDepartmentComponent> = {
  component: ViewDepartmentComponent,
  title: 'ViewDepartmentComponent',
};
export default meta;
type Story = StoryObj<ViewDepartmentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
