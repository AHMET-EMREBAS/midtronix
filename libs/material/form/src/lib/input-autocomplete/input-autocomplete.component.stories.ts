import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputAutocompleteComponent } from './input-autocomplete.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
const meta: Meta<InputAutocompleteComponent> = {
  component: InputAutocompleteComponent,
  title: 'InputAutocompleteComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputAutocompleteComponent>;

export const Primary: Story = {
  args: {
    label: 'Select Option',
    inputName: 'option',
    prefixIcon: 'category',
    defaultValue: { id: 1, name: 'Option 1' },
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

    expect(canvas.getByText(/Select Option/gi)).toBeTruthy();
  },
};
