import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideMatFormFieldOptions } from '@mdtx/material/core';
import { httpInterceptors } from './app.interceptors';
import { provideEffects } from '@ngrx/effects';
import { provideEntityData, withEffects } from '@ngrx/data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors(httpInterceptors)),
    provideStore(),
    provideEffects([]),
    provideEntityData(
      {
        pluralNames: {
          Sample: 'Samples',
        },
        entityMetadata: {
          Sample: {},
        },
      },
      withEffects()
    ),
    provideMatFormFieldOptions({ appearance: 'outline', color: 'primary' }),
    provideRouter(appRoutes, withHashLocation()),
    provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
