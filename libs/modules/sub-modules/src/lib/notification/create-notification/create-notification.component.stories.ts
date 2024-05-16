import type { Meta, StoryObj } from '@storybook/angular';
import { CreateNotificationComponent } from './create-notification.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateNotificationComponent> = {
  component: CreateNotificationComponent,
  title: 'CreateNotificationComponent',
};
export default meta;
type Story = StoryObj<CreateNotificationComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
