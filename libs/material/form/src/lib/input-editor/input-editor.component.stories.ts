import type { Meta, StoryObj } from '@storybook/angular';
import { InputEditorComponent } from './input-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputEditorComponent> = {
  component: InputEditorComponent,
  title: 'InputEditorComponent',
};
export default meta;
type Story = StoryObj<InputEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-editor works!/gi)).toBeTruthy();
  },
};
