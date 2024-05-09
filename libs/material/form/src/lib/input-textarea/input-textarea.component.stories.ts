import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputTextareaComponent } from './input-textarea.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<InputTextareaComponent> = {
  component: InputTextareaComponent,
  title: 'InputTextareaComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputTextareaComponent>;

export const Primary: Story = {
  args: {
    label: 'Type your text here',
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Type your text here/gi)).toBeTruthy();
  },
};
