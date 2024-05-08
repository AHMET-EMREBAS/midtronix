import type { Meta, StoryObj } from '@storybook/angular';
import { MaterialComponent } from './material.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MaterialComponent> = {
  component: MaterialComponent,
  title: 'MaterialComponent',
};
export default meta;
type Story = StoryObj<MaterialComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/material works!/gi)).toBeTruthy();
  },
};
