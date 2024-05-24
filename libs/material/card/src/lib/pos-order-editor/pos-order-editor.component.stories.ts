import type { Meta, StoryObj } from '@storybook/angular';
import { PosOrderEditorComponent } from './pos-order-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PosOrderEditorComponent> = {
  component: PosOrderEditorComponent,
  title: 'PosOrderEditorComponent',
};
export default meta;
type Story = StoryObj<PosOrderEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pos-order-editor works!/gi)).toBeTruthy();
  },
};
