import type { Meta, StoryObj } from '@storybook/angular';
import { BaseFormComponent } from './base-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'BaseFormComponent',
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/base-form works!/gi)).toBeTruthy();
  },
};
