import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputChipSelectComponent } from './input-chip-select.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<InputChipSelectComponent> = {
  component: InputChipSelectComponent,
  title: 'InputChipSelectComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputChipSelectComponent>;

export const Primary: Story = {
  args: {
    label: 'Select Option',
    inputName: 'option',
    prefixIcon: 'category',
    options: [
      {
        id: 1,
        name: 'Option 1',
        items: [
          { id: 5, name: 'Sub 5' },
          { id: 6, name: 'Sub 6' },
          { id: 7, name: 'Sub 7' },
        ],
      },
      {
        id: 2,
        name: 'Option 2',
        items: [
          { id: 8, name: 'Sub 8' },
          { id: 9, name: 'Sub 9' },
          { id: 10, name: 'Sub 10' },
        ],
      },
      {
        id: 3,
        name: 'Option 3',
        items: [
          { id: 11, name: 'Sub 11' },
          { id: 12, name: 'Sub 12' },
          { id: 13, name: 'Sub 13' },
        ],
      },
      {
        id: 4,
        name: 'Option 4',
        items: [
          { id: 14, name: 'Sub 14' },
          { id: 15, name: 'Sub 15' },
          { id: 16, name: 'Sub 16' },
        ],
      },
    ],
    multiple: true,
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
