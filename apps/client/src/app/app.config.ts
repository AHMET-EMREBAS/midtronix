import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';
import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideMatFormFieldOptions } from '@mdtx/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMatFormFieldOptions({ appearance: 'outline', color: 'primary' }),
    provideClientHydration(),
    provideRouter(appRoutes, withHashLocation()),
    provideHttpClient(withInterceptors([])),
    provideStore([]),
    provideEffects([]),
    provideEntityData(
      {
        pluralNames: {
          Product: 'Products',
          Category: 'Categories',
          Department: 'Departments',
        },
        entityMetadata: {
          Product: {},
          Category: {},
          Department: {},
        },
      },
      withEffects()
    ),
    provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
