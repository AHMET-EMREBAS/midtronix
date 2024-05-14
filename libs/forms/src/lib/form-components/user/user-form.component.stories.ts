import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { UserFormComponent } from './user-form.component';

import { userEvent, within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  provideErrorStateMatcher,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
import { expect } from '@storybook/jest';

const meta: Meta<UserFormComponent> = {
  component: UserFormComponent,
  title: 'UserFormComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideMatFormFieldOptions({ appearance: 'outline' }),
        provideErrorStateMatcher(),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<UserFormComponent>;

export const Primary: Story = {};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const findButton = (testid: string) => canvas.getByTestId(testid);
    const findInput = (iname: string) => canvas.getByTestId(`input-${iname}`);

    const type = async (element: any, value: any) =>
      await userEvent.type(element, value, { delay: 100 });

    const click = (element: any) => userEvent.click(element, { delay: 1000 });

    // Form Buttons
    const submitButton = findButton('submit');
    const resetButton = findButton('reset');
    const passwordToggle = findButton('password-toggle');

    // Form Fields
    const username = findInput('username');
    const password = findInput('password');

    // Valdiate buttons
    expect(submitButton).toBeTruthy();
    expect(resetButton).toBeTruthy();

    // Validte input Elements
    expect(username).toBeTruthy();
    expect(password).toBeTruthy();

    const submitForm = async () => {
      await type(username, 'user@gmail.com');
      await type(password, 'Password123.!');

      await click(passwordToggle);

      await click(submitButton);

      await click(resetButton);
    };

    await submitForm();
  },
};
