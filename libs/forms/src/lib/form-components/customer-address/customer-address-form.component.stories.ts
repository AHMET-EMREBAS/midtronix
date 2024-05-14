import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CustomerAddressFormComponent } from './customer-address-form.component';

import { userEvent, within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  provideErrorStateMatcher,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerAddressFormComponent> = {
  component: CustomerAddressFormComponent,
  title: 'CustomerAddressFormComponent',
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
type Story = StoryObj<CustomerAddressFormComponent>;

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
    const street = findInput('street');
    const city = findInput('city');
    const state = findInput('state');
    const country = findInput('country');
    const zip = findInput('zip');

    // Valdiate buttons
    expect(street).toBeTruthy();
    expect(city).toBeTruthy();
    expect(state).toBeTruthy();
    expect(country).toBeTruthy();
    expect(zip).toBeTruthy();

    const submitForm = async () => {
      await type(street, 'N Damen');
      await type(city, 'Chicago');
      await type(state, 'IL');
      await type(country, 'US');
      await type(zip, '60645');

      await click(submitButton);

      await click(resetButton);
    };

    await submitForm();
  },
};
