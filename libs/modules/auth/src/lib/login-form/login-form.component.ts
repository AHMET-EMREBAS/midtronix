import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldAppearance,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import {
  CommonFormModule,
  provideErrorStateMatcher,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
import { isStrongPassword } from 'class-validator';
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
    username: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        (c: AbstractControl) =>
          isStrongPassword(c.value) ? null : { password: 'true' },
      ],
    ],
  });
  constructor(protected readonly builder: FormBuilder) {}
}
