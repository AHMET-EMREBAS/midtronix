import { Provider } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher as __ErrorStateMatcher } from '@angular/material/core';

export class ErrorStateMatcher implements __ErrorStateMatcher {
  isErrorState(
    control: AbstractControl<any, any> | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return (control?.dirty && control.touched && !control.valid) ?? false;
  }
}

export function provideErrorStateMatcher(): Provider {
  return {
    provide: __ErrorStateMatcher,
    useClass: ErrorStateMatcher,
  };
}
