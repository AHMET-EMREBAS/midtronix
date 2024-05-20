import type { Meta, StoryObj } from '@storybook/angular';
import { HomeNotificationComponent } from './home-notification.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeNotificationComponent> = {
  component: HomeNotificationComponent,
  title: 'HomeNotificationComponent',
};
export default meta;
type Story = StoryObj<HomeNotificationComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-notification works!/gi)).toBeTruthy();
  },
};
