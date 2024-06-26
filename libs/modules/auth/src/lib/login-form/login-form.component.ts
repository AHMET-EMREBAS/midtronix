import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  ValidatorBuilder,
  provideErrorStateMatcher,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
import { CommonFormModule } from '@mdtx/material/form';
import { ILogin } from '@mdtx/common';

import '@angular/localize/init';
@Component({
  selector: 'mdtx-login-form',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  providers: [provideMatFormFieldOptions(), provideErrorStateMatcher()],
})
export class LoginFormComponent {
  @Output() loginEvent = new EventEmitter<ILogin>();

  formGroup = this.builder.nonNullable.group({
    username: ['', new ValidatorBuilder('username').required().email().build()],
    password: [
      '',
      new ValidatorBuilder('password').required().password().build(),
    ],
  });

  constructor(protected readonly builder: FormBuilder) {}

  private getControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }

  private errors(name: string): any {
    return this.getControl(name)?.errors ?? {};
  }

  errorMessage(name: string) {
    return Object.values(this.errors(name)).pop();
  }

  login() {
    this.loginEvent.emit(this.formGroup.value as ILogin);
  }
}
