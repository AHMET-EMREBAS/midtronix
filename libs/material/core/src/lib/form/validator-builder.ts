/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractControl, ValidatorFn } from '@angular/forms';
import {
  isEmail,
  isStrongPassword,
  isPhoneNumber,
  isEAN,
  isIn,
} from 'class-validator';
import { IFormBuilder } from './form-builder-interface';

export class ValidatorBuilder<T extends Record<string, any> = any> {
  private readonly validatorList: ValidatorFn[] = [];
  private parentInstance!: IFormBuilder<T>;
  constructor(private readonly propertyName: keyof T) {}
  private __name() {
    return this.propertyName.toString();
  }

  done() {
    return this.parentInstance;
  }

  add(propertyName: keyof T) {
    if (!this.parentInstance) throw new Error('Parent is not set!');
    return this.parentInstance.add(propertyName);
  }

  private push(fn: ValidatorFn) {
    this.validatorList.push(fn);
    return this;
  }

  required(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      c.value?.trim().length > 0
        ? null
        : { required: `${this.__name()} is required!` }
    );
  }

  shortText() {
    this.minLength(3);
    this.maxLength(60);
    return this;
  }

  longText() {
    this.maxLength(600);
    return this;
  }

  minLength(value: number): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      c.value?.length < value
        ? {
            minLength: `${this.__name()} should be longer than ${value}!`,
          }
        : null
    );
  }

  maxLength(value: number): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      c.value?.length > value
        ? {
            maxLength: `${this.__name()} should be shorter than ${value}!`,
          }
        : null
    );
  }

  min(value: number): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      c.value?.length < value
        ? {
            min: `${this.__name()} should be more than ${value}!`,
          }
        : null
    );
  }

  max(value: number): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      c.value?.length > value
        ? {
            max: `${this.__name()} should be less than ${value}!`,
          }
        : null
    );
  }

  email(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      isEmail(c.value)
        ? null
        : { email: `${this.__name()} should be a valid email!` }
    );
  }

  password(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      isStrongPassword(c.value)
        ? null
        : {
            password: `${this.__name()} should be a strong password!`,
          }
    );
  }
  ean(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      isEAN(c.value)
        ? null
        : { ean: `${this.__name()} should be a valid barcode!` }
    );
  }

  phone(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      isPhoneNumber(c.value)
        ? null
        : {
            phone: `${this.__name()} should be a valid phone number!`,
          }
    );
  }

  isIn(list: any[]) {
    return this.push((c: AbstractControl) =>
      isIn(c.value, list)
        ? null
        : { isIn: `${this.__name()} should be one of ${list}` }
    );
  }

  isNotIn(list: any[]) {
    return this.push((c: AbstractControl) =>
      isIn(c.value, list)
        ? { isNotIn: `${this.__name()} should be none of ${list}` }
        : null
    );
  }

  build(): ValidatorFn[] {
    return [...this.validatorList];
  }
}
