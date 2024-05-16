import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateNotificationComponent } from './update-notification.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateNotificationComponent> = {
  component: UpdateNotificationComponent,
  title: 'UpdateNotificationComponent',
};
export default meta;
type Story = StoryObj<UpdateNotificationComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
