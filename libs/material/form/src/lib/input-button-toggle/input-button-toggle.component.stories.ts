import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { InputButtonToggleComponent } from './input-button-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<InputButtonToggleComponent> = {
  component: InputButtonToggleComponent,
  title: 'InputButtonToggleComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputButtonToggleComponent>;

export const Primary: Story = {
  args: {
    label: 'Select One',
    inputName: 'option',
    prefixIcon: 'category',
    options: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
      { id: 4, name: 'Option 4' },
    ],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Select One/gi)).toBeTruthy();
  },
};
