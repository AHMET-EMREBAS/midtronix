import type { Meta, StoryObj } from '@storybook/angular';
import { ViewUserEmailComponent } from './view-user-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewUserEmailComponent> = {
  component: ViewUserEmailComponent,
  title: 'ViewUserEmailComponent',
};
export default meta;
type Story = StoryObj<ViewUserEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
