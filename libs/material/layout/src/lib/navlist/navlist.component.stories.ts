import type { Meta, StoryObj } from '@storybook/angular';
import { NavlistComponent } from './navlist.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavlistComponent> = {
  component: NavlistComponent,
  title: 'NavlistComponent',
};
export default meta;
type Story = StoryObj<NavlistComponent>;

export const Primary: Story = {
  args: {
    inToolbar: false,
  },
};

export const Heading: Story = {
  args: {
    inToolbar: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/navlist works!/gi)).toBeTruthy();
  },
};
