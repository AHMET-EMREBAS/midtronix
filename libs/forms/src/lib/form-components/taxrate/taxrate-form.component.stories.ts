import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { TaxrateFormComponent } from './taxrate-form.component';

import { userEvent, within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  provideErrorStateMatcher,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
import { expect } from '@storybook/jest';

const meta: Meta<TaxrateFormComponent> = {
  component: TaxrateFormComponent,
  title: 'TaxrateFormComponent',
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
type Story = StoryObj<TaxrateFormComponent>;

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
    const state = findInput('state');
    const district = findInput('district');
    const rate = findInput('rate');

    // Valdiate buttons
    expect(submitButton).toBeTruthy();
    expect(resetButton).toBeTruthy();

    // Validte input Elements
    expect(state).toBeTruthy();
    expect(district).toBeTruthy();
    expect(rate).toBeTruthy();

    const submitForm = async () => {
      await type(state, 'State');
      await type(district, 'District');
      await type(rate, 'Rate');

      await click(submitButton);

      await click(resetButton);
    };

    await submitForm();
  },
};
