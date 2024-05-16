import type { Meta, StoryObj } from '@storybook/angular';
import { ViewTicketComponent } from './view-tickets.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewTicketComponent> = {
  component: ViewTicketComponent,
  title: 'ViewTicketComponent',
};
export default meta;
type Story = StoryObj<ViewTicketComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
