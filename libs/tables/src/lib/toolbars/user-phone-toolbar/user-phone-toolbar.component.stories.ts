import type { Meta, StoryObj } from '@storybook/angular';
import { UserPhoneToolbarComponent } from './user-phone-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserPhoneToolbarComponent> = {
  component: UserPhoneToolbarComponent,
  title: 'UserPhoneToolbarComponent',
};
export default meta;
type Story = StoryObj<UserPhoneToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
