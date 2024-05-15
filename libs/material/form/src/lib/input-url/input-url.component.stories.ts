import type { Meta, StoryObj } from '@storybook/angular';
import { InputUrlComponent } from './input-url.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputUrlComponent> = {
  component: InputUrlComponent,
  title: 'InputUrlComponent',
};
export default meta;
type Story = StoryObj<InputUrlComponent>;

export const Primary: Story = {
  args: {
    prefixIcon: 'link',
    textSuffix: '',
    textPrefix: '',
  },
};

export const Heading: Story = {
  args: {
    prefixIcon: 'link',
    textSuffix: '',
    textPrefix: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-url works!/gi)).toBeTruthy();
  },
};
