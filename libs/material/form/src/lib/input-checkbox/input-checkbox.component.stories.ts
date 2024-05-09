import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputCheckboxComponent } from './input-checkbox.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<InputCheckboxComponent> = {
  component: InputCheckboxComponent,
  title: 'InputCheckboxComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputCheckboxComponent>;

export const Primary: Story = {
  args: {
    label: 'Checkbox',
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Checkbox!/gi)).toBeTruthy();
  },
};
