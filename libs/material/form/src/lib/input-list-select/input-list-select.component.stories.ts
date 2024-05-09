import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputListSelectComponent } from './input-list-select.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<InputListSelectComponent> = {
  component: InputListSelectComponent,
  title: 'InputListSelectComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputListSelectComponent>;

export const Primary: Story = {
  args: {
    label: 'Select Option',
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
    expect(canvas.getByText(/input-list-select works!/gi)).toBeTruthy();
  },
};
