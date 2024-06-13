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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-forgot-password',
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
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  username = new FormControl(
    '',
    new ValidatorBuilder('username').email().build()
  );

  password = new FormControl(
    '',
    new ValidatorBuilder('username').password().build()
  );

  loginFormGroup = new FormGroup({
    username: this.username,
    password: this.password,
  });

  constructor(
    protected readonly authService: AuthService,
    protected readonly snackbar: MatSnackBar,
    protected readonly router: Router
  ) {}

  async submit() {
    const { username } = this.loginFormGroup.value;

    if (username) {
      try {
        const result = await this.authService.forgotPassword({ username });

        result.message;
        this.snackbar.open(result.message, undefined, {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'success-snackbar',
        });
        this.router.navigate(['../', 'login-with-sso']);
      } catch (err) {
        this.snackbar.open('We could not find the account!', undefined, {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'error-snackbar',
        });
        this.loginFormGroup.reset();
      }
    }
  }
}
