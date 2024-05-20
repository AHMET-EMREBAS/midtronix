import type { Meta, StoryObj } from '@storybook/angular';
import { HomeProjectComponent } from './home-project.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeProjectComponent> = {
  component: HomeProjectComponent,
  title: 'HomeProjectComponent',
};
export default meta;
type Story = StoryObj<HomeProjectComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-project works!/gi)).toBeTruthy();
  },
};
