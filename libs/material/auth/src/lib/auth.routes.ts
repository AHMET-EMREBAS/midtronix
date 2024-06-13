import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const AuthRoute: Route = {
  path: 'auth/:tab',
  loadComponent: () => AuthComponent,
};
