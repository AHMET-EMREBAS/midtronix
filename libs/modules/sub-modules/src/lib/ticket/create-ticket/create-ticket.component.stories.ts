import type { Meta, StoryObj } from '@storybook/angular';
import { CreateTicketComponent } from './create-ticket.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateTicketComponent> = {
  component: CreateTicketComponent,
  title: 'CreateTicketComponent',
};
export default meta;
type Story = StoryObj<CreateTicketComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
