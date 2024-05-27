import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CustomerAccountTableComponent } from './customer-account-table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { storyBookHttpInterceptor } from '../../__base';
import { provideMatFormFieldOptions } from '@mdtx/material/core';

const meta: Meta<CustomerAccountTableComponent> = {
  component: CustomerAccountTableComponent,
  title: 'CustomerAccountTableComponent',

  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideHttpClient(withInterceptors(storyBookHttpInterceptor)),
        provideMatFormFieldOptions({ appearance: 'outline' }),
        provideStore([]),
        provideEffects([]),
        provideEntityData(
          {
            pluralNames: {
              CustomerAccount: 'CustomerAccounts',
            },
            entityMetadata: {
              CustomerAccount: {},
            },
          },
          withEffects()
        ),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<CustomerAccountTableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/customer-account-table works!/gi)).toBeTruthy();
  },
};