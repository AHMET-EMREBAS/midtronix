import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { TicketFormComponent } from './ticket-form.component';

import { userEvent, within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  provideErrorStateMatcher,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
import { expect } from '@storybook/jest';

const meta: Meta<TicketFormComponent> = {
  component: TicketFormComponent,
  title: 'TicketFormComponent',
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
type Story = StoryObj<TicketFormComponent>;

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

    // Form Fields

    // Form Fields
    const name = findInput('name');
    const description = findInput('description');
    const due = findInput('due');
    const startDate = findInput('startDate');
    const finishDate = findInput('finishDate');

    // Valdiate buttons
    expect(submitButton).toBeTruthy();
    expect(resetButton).toBeTruthy();

    // Validte input Elements

    // Validte input Elements
    expect(name).toBeTruthy();
    expect(description).toBeTruthy();
    expect(due).toBeTruthy();
    expect(startDate).toBeTruthy();
    expect(finishDate).toBeTruthy();

    const submitForm = async () => {
      await type(name, 'Type task name here');
      await type(description, 'Type task description here');

      await type(due, '5/14/2024');
      await type(startDate, '5/16/2024');
      await type(finishDate, '5/20/2024');

      await click(submitButton);

      await click(resetButton);
    };

    await submitForm();
  },
};
