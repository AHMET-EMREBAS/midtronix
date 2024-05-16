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

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects([]),
    provideMatFormFieldOptions({ appearance: 'outline', color: 'primary' }),
    provideRouter(appRoutes, withHashLocation()),
    provideClientHydration(),
    provideHttpClient(withInterceptors(httpInterceptors)),
    provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
