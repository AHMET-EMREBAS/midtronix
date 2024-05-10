import type { Meta, StoryObj } from '@storybook/angular';
import { SampleLayoutComponent } from './sample-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SampleLayoutComponent> = {
  component: SampleLayoutComponent,
  title: 'SampleLayoutComponent',
};
export default meta;
type Story = StoryObj<SampleLayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sample-layout works!/gi)).toBeTruthy();
  },
};
