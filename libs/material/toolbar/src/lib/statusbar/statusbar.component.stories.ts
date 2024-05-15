import type { Meta, StoryObj } from '@storybook/angular';
import { StatusbarComponent } from './statusbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StatusbarComponent> = {
  component: StatusbarComponent,
  title: 'StatusbarComponent',
};
export default meta;
type Story = StoryObj<StatusbarComponent>;

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
    expect(canvas.getByText(/statusbar works!/gi)).toBeTruthy();
  },
};
