import type { Meta, StoryObj } from '@storybook/angular';
import { EmsComponent } from './ems.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EmsComponent> = {
  component: EmsComponent,
  title: 'EmsComponent',
};
export default meta;
type Story = StoryObj<EmsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ems works!/gi)).toBeTruthy();
  },
};
