import { Component } from '@angular/core';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldAppearance,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import {
  CommonFormModule,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
@Component({
  selector: 'mdtx-login-form',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  providers: [provideMatFormFieldOptions()],
})
export class LoginFormComponent {}
