import type { Meta, StoryObj } from '@storybook/angular';
import { InputSearchComponent } from './input-search.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputSearchComponent> = {
  component: InputSearchComponent,
  title: 'InputSearchComponent',
};
export default meta;
type Story = StoryObj<InputSearchComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-search works!/gi)).toBeTruthy();
  },
};
