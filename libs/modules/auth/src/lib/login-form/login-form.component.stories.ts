import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
const meta: Meta<LoginFormComponent> = {
  component: LoginFormComponent,
  title: 'LoginFormComponent',
  decorators: [
    applicationConfig({
      providers: [provideNoopAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<LoginFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/login-form works!/gi)).toBeTruthy();
  },
};
