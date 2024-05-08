import type { Meta, StoryObj } from '@storybook/angular';
import { CreateUserFormComponent } from './create-user-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateUserFormComponent> = {
  component: CreateUserFormComponent,
  title: 'CreateUserFormComponent',
};
export default meta;
type Story = StoryObj<CreateUserFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/create-user-form works!/gi)).toBeTruthy();
  },
};
