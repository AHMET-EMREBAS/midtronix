import type { Meta, StoryObj } from '@storybook/angular';
import { UpdatePasswordFormComponent } from './update-password-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdatePasswordFormComponent> = {
  component: UpdatePasswordFormComponent,
  title: 'UpdatePasswordFormComponent',
};
export default meta;
type Story = StoryObj<UpdatePasswordFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/update-password-form works!/gi)).toBeTruthy();
  },
};
