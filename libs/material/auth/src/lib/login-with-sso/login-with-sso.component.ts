import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InputTextComponent,
  InputPasswordComponent,
} from '@mdtx/material/form';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ValidatorBuilder } from '@mdtx/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService, AuthTokenStore } from '@mdtx/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mdtx-login-with-sso',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    InputTextComponent,
    InputPasswordComponent,
    MatSnackBarModule,
    RouterModule,
  ],
  providers: [AuthService],
  templateUrl: './login-with-sso.component.html',
  styleUrl: './login-with-sso.component.scss',
})
export class LoginWithSsoComponent {
  username = new FormControl(
    '',
    new ValidatorBuilder('username').email().build()
  );

  sso = new FormControl('', []);

  loginFormGroup = new FormGroup({
    username: this.username,
    sso: this.sso,
  });

  constructor(
    protected readonly authService: AuthService,
    protected readonly snackbar: MatSnackBar
  ) {}

  async submit() {
    const { username, sso } = this.loginFormGroup.value;

    if (username && sso) {
      try {
        const result = await this.authService.loginWithSSO({ username, sso });

        AuthTokenStore.set(result.accesstoken);

        this.snackbar.open('Wellcome.', undefined, {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'success-snackbar',
        });
      } catch (err) {
        this.snackbar.open('Wrong password or User not found!', undefined, {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'error-snackbar',
        });
        this.loginFormGroup.reset();
      }
    }
  }
}
