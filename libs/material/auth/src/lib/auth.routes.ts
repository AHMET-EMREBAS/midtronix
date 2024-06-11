import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginWithSsoComponent } from './login-with-sso/login-with-sso.component';

export const AuthRoute: Route = {
  path: 'auth',
  loadComponent: () => AuthComponent,
  children: [
    { path: 'login', loadComponent: () => LoginComponent },
    { path: 'forgot-password', loadComponent: () => ForgotPasswordComponent },
    { path: 'login-with-sso', loadComponent: () => LoginWithSsoComponent },
  ],
};
