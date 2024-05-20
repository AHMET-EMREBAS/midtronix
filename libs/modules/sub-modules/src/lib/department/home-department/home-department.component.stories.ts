import type { Meta, StoryObj } from '@storybook/angular';
import { HomeDepartmentComponent } from './home-department.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeDepartmentComponent> = {
  component: HomeDepartmentComponent,
  title: 'HomeDepartmentComponent',
};
export default meta;
type Story = StoryObj<HomeDepartmentComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-department works!/gi)).toBeTruthy();
  },
};
