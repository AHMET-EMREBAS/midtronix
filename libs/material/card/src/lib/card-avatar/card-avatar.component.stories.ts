import type { Meta, StoryObj } from '@storybook/angular';
import { CardAvatarComponent } from './card-avatar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CardAvatarComponent> = {
  component: CardAvatarComponent,
  title: 'CardAvatarComponent',
};
export default meta;
type Story = StoryObj<CardAvatarComponent>;

export const Primary: Story = {
  args: {
    title: '',
    subtitle: '',
  },
};

export const Heading: Story = {
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/card-avatar works!/gi)).toBeTruthy();
  },
};
