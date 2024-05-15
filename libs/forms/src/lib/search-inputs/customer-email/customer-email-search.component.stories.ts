import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CustomerEmailSearchComponent } from './customer-email-search.component';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { storyBookHttpInterceptor } from '../../__base';
import { provideMatFormFieldOptions } from '@mdtx/material/core';

const meta: Meta<CustomerEmailSearchComponent> = {
  component: CustomerEmailSearchComponent,
  title: 'CustomerEmailSearchComponent',
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
              CustomerEmail: 'Categories',
            },
            entityMetadata: {
              CustomerEmail: {},
            },
          },
          withEffects()
        ),
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<CustomerEmailSearchComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const type = async (element: any, value: any) =>
      await userEvent.type(element, value, { delay: 100 });

    const findInput = (iname: string) => canvas.getByTestId(`input-${iname}`);

    const searchInput = findInput('customerEmail');

    const search = async (searchValue: string) => {
      await userEvent.clear(searchInput);
      await type(searchInput, searchValue);
    };

    for (const [i, s] of [
      [1, 'customerEmail 1'],
      [2, 'customerEmail 2'],
      [3, 'customerEmail 3'],
      [4, '1'],
      [5, '2'],
      [6, '3'],
    ] as [number, string][]) {
      setTimeout(async () => {
        await search(s);
      }, i * 3000);
    }
  },
};
