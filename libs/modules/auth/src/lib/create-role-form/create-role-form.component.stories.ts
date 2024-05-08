import type { Meta, StoryObj } from '@storybook/angular';
import { CreateRoleFormComponent } from './create-role-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateRoleFormComponent> = {
  component: CreateRoleFormComponent,
  title: 'CreateRoleFormComponent',
};
export default meta;
type Story = StoryObj<CreateRoleFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/create-role-form works!/gi)).toBeTruthy();
  },
};
