import type { Meta, StoryObj } from '@storybook/angular';
import { ToolbarComponent } from './toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToolbarComponent> = {
  component: ToolbarComponent,
  title: 'ToolbarComponent',
};
export default meta;
type Story = StoryObj<ToolbarComponent>;

export const Primary: Story = {
  args: {
    leftToolbarItems: [{ id: 1, title: 'Info', icon: 'info' }],
    rightToolbarItems: [{ id: 2, title: 'Some', icon: 'date_range' }],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toolbar works!/gi)).toBeTruthy();
  },
};
