import type { Meta, StoryObj } from '@storybook/angular';
import { InputListSelectComponent } from './input-list-select.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputListSelectComponent> = {
  component: InputListSelectComponent,
  title: 'InputListSelectComponent',
};
export default meta;
type Story = StoryObj<InputListSelectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-list-select works!/gi)).toBeTruthy();
  },
};
