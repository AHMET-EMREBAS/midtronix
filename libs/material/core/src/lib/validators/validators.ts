import '@angular/localize/init';
import { names } from '@mdtx/utils';
import { isEmail, isStrongPassword } from 'class-validator';
export type ValidatorFn<T> = (value: T) => string | null;

export function __isRequired(name: string): ValidatorFn<string> {
  return (value = '') =>
    value && value.length > 0
      ? null
      : $localize`${names(name).fileName} is required!`;
}

export function __minLength(
  name: string,
  minLength: number
): ValidatorFn<string> {
  return (value = '') =>
    value && value.length < minLength
      ? $localize`${names(name).fileName} should be longer than ${minLength}!`
      : null;
}

export function __maxLength(name: string, length: number): ValidatorFn<string> {
  return (value = '') =>
    value && value.length > length
      ? $localize`${names(name).fileName} should be shorter than ${length}!`
      : null;
}

export function __min(name: string, min: number): ValidatorFn<number> {
  return (value) =>
    value && value < min
      ? $localize`${
          names(name).fileName
        } should be more than or equal to ${min}!`
      : null;
}

export function __max(name: string, max: number): ValidatorFn<number> {
  return (value) =>
    value && value > max
      ? $localize`${
          names(name).fileName
        } should be less than or equal to ${max}!`
      : null;
}

export function __email(name: string): ValidatorFn<number> {
  return (value) => {
    const result =
      value && isEmail(value)
        ? null
        : $localize`${names(name).fileName} should be a valid email!`;

    return result;
  };
}

export function __password(name: string): ValidatorFn<number> {
  return (value) =>
    value && isStrongPassword(value)
      ? null
      : $localize`${names(name).fileName} is weak!`;
}
