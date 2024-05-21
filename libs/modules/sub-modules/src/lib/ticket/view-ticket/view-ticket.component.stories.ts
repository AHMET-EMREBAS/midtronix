import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ViewTicketComponent } from './view-ticket.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { storyBookHttpInterceptor } from '@mdtx/forms';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideMatFormFieldOptions } from '@mdtx/material/core';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

const meta: Meta<ViewTicketComponent> = {
  component: ViewTicketComponent,
  title: 'ViewTicketComponent',
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(RouterModule.forRoot([])),
        provideAnimations(),
        provideHttpClient(withInterceptors(storyBookHttpInterceptor)),
        provideStore(),
        provideEffects([]),
        provideEntityData(
          {
            pluralNames: {
              Ticket: 'Tickets',
            },
            entityMetadata: {
              Ticket: {},
            },
          },
          withEffects()
        ),
        provideMatFormFieldOptions({ appearance: 'outline' }),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<ViewTicketComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
