import { AfterViewInit, Component, OnDestroy } from '@angular/core';
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
import { Subscription } from 'rxjs';

@Component({
  selector: 'mdtx-reset-password',
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
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  providers: [AuthService],
})
export class ResetPasswordComponent implements AfterViewInit, OnDestroy {
  username = new FormControl(
    '',
    new ValidatorBuilder('username').email().build()
  );

  password = new FormControl(
    '',
    new ValidatorBuilder('username').password().build()
  );

  newPasword = new FormControl(
    '',
    new ValidatorBuilder('username').password().build()
  );

  confirmPassword = new FormControl('', [
    (c) => {
      if (c.value === this.password.value) {
        return { password: 'The password is the same as old password!' };
      } else if (c.value == this.newPasword.value) {
        return null;
      } else {
        return { password: `Password does not match!` };
      }
    },
  ]);

  formGroup = new FormGroup({
    username: this.username,
    password: this.password,
    newPassword: this.newPasword,
    confirmPassword: this.confirmPassword,
  });

  constructor(
    protected readonly authService: AuthService,
    protected readonly snackbar: MatSnackBar
  ) {}

  async login() {
    const { username, password, newPassword } = this.formGroup.value;

    if (username && password && newPassword) {
      try {
        const result = await this.authService.updatePassword({
          username,
          password,
          newPassword,
        });

        this.snackbar.open(result.message, undefined, {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'success-snackbar',
        });
      } catch (err) {
        console.log(err);
        this.snackbar.open((err as any).message, undefined, {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'error-snackbar',
        });
      }
    }
  }

  sub!: Subscription;

  ngAfterViewInit(): void {
    this.sub = this.newPasword.valueChanges.subscribe((e) => {
      this.confirmPassword.reset();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
