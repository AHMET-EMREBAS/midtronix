import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputEditorComponent } from './input-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';

const meta: Meta<InputEditorComponent> = {
  component: InputEditorComponent,
  title: 'InputEditorComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputEditorComponent>;

const editorControl = new FormControl('', []);

export const Primary: Story = {
  args: {
    label: 'Post',
    formControl: editorControl,
    inputName: 'editor',
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Post/gi)).toBeTruthy();
  },
};
