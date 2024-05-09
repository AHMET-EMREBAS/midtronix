import { ValidatorFn } from '@angular/forms';
import {
  isEmail,
  isStrongPassword,
  isPhoneNumber,
  isEAN,
} from 'class-validator';
export class InputValidator {
  protected readonly validators: ValidatorFn[] = [];
  private constructor(protected readonly name: string) {}

  static create(name: string) {
    return new InputValidator(name);
  }

  required(value?: boolean) {
    if (value == true)
      this.validators.push((c) => {
        return c.value ? null : { required: `${this.name} is required!` };
      });
    return this;
  }

  minLength(value?: number) {
    if (value != undefined)
      this.validators.push((c) => {
        return c?.value?.length < value
          ? { minLength: `${this.name} should be longer than ${value}!` }
          : null;
      });
    return this;
  }

  maxLength(value?: number) {
    if (value != undefined)
      this.validators.push((c) => {
        return c?.value?.length > value
          ? { maxLength: `${this.name} should be shorter than ${value}!` }
          : null;
      });
    return this;
  }
  min(value?: number) {
    if (value != undefined)
      this.validators.push((c) => {
        return c?.value < value
          ? { min: `${this.name} should be more than ${value}!` }
          : null;
      });
    return this;
  }

  max(value?: number) {
    if (value != undefined)
      this.validators.push((c) => {
        return c?.value > value
          ? { min: `${this.name} should be less than ${value}!` }
          : null;
      });
    return this;
  }

  email() {
    this.validators.push((c) => {
      return isEmail(c.value)
        ? null
        : { email: `${this.name} should be a valid email!` };
    });
    return this;
  }

  password() {
    this.validators.push((c) => {
      return isStrongPassword(c.value)
        ? null
        : { password: `${this.name} should be strong password!` };
    });
    return this;
  }

  ean() {
    this.validators.push((c) => {
      return isEAN(c.value)
        ? null
        : { ean: `${this.name} should be a valid ean!` };
    });
    return this;
  }

  phone() {
    this.validators.push((c) => {
      return isPhoneNumber(c.value)
        ? null
        : { phone: `${this.name} should be a valid phone!` };
    });
    return this;
  }

  build() {
    return [...this.validators];
  }
}
