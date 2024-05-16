import type { Meta, StoryObj } from '@storybook/angular';
import { ViewUserPhoneComponent } from './view-user-phones.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewUserPhoneComponent> = {
  component: ViewUserPhoneComponent,
  title: 'ViewUserPhoneComponent',
};
export default meta;
type Story = StoryObj<ViewUserPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
