import type { Meta, StoryObj } from '@storybook/angular';
import { InputPhoneComponent } from './input-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputPhoneComponent> = {
  component: InputPhoneComponent,
  title: 'InputPhoneComponent',
};
export default meta;
type Story = StoryObj<InputPhoneComponent>;

export const Primary: Story = {
  args: {
    prefixIcon: 'call',
  },
};

export const Heading: Story = {
  args: {
    prefixIcon: 'call',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/input-phone works!/gi)).toBeTruthy();
  },
};
