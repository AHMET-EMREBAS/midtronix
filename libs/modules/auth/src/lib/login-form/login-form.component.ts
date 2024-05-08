import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {
  InputValidator,
  provideErrorStateMatcher,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
import { isStrongPassword } from 'class-validator';

import { CommonFormModule } from '@mdtx/material/form';
@Component({
  selector: 'mdtx-login-form',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  providers: [provideMatFormFieldOptions(), provideErrorStateMatcher()],
})
export class LoginFormComponent {
  formGroup = this.builder.nonNullable.group({
    username: [
      '',
      InputValidator.create('username').required().email().build(),
    ],
    password: [
      '',
      InputValidator.create('password').required().password().build(),
    ],
  });
  constructor(protected readonly builder: FormBuilder) {}
}
