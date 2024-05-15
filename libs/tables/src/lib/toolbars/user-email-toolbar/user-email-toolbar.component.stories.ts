import type { Meta, StoryObj } from '@storybook/angular';
import { UserEmailToolbarComponent } from './user-email-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserEmailToolbarComponent> = {
  component: UserEmailToolbarComponent,
  title: 'UserEmailToolbarComponent',
};
export default meta;
type Story = StoryObj<UserEmailToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
