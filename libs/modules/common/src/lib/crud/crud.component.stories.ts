import type { Meta, StoryObj } from '@storybook/angular';
import { CrudComponent } from './crud.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CrudComponent> = {
  component: CrudComponent,
  title: 'CrudComponent',
};
export default meta;
type Story = StoryObj<CrudComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/crud works!/gi)).toBeTruthy();
  },
};
