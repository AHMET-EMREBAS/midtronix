import { isEmail, isStrongPassword } from 'class-validator';
export type ValidatorFn<T> = (value: T) => string | null;

export function __isRequired(name: string): ValidatorFn<string> {
  return (value = '') => (value ? null : $localize`${name} is required!`);
}

export function __minLength(
  name: string,
  minLength: number
): ValidatorFn<string> {
  return (value = '') =>
    value.length < minLength
      ? $localize`${name} should be longer than ${minLength}!`
      : null;
}

export function __maxLength(name: string, length: number): ValidatorFn<string> {
  return (value = '') =>
    value.length < length
      ? $localize`${name} should be shorter than ${length}!`
      : null;
}

export function __min(name: string, min: number): ValidatorFn<number> {
  return (value) =>
    value < min
      ? $localize`${name} should be more than or equal to ${min}!`
      : null;
}

export function __max(name: string, max: number): ValidatorFn<number> {
  return (value) =>
    value > max
      ? $localize`${name} should be less than or equal to ${max}!`
      : null;
}

export function __email(name: string): ValidatorFn<number> {
  return (value) =>
    isEmail(value) ? null : $localize`${name} should be a valid email!`;
}

export function __password(name: string): ValidatorFn<number> {
  return (value) =>
    isStrongPassword(value) ? null : $localize`${name} is weak!`;
}
