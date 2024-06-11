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
import { ILoginResponse, ValidatorBuilder } from '@mdtx/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService, AuthTokenStore } from '@mdtx/material/core';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'mdtx-login',
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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService],
})
export class LoginComponent {
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
    protected readonly snackbar: MatSnackBar
  ) {}

  async login() {
    const { username, password } = this.loginFormGroup.value;

    if (username && password) {
      try {
        const result = await this.authService.login({ username, password });

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
