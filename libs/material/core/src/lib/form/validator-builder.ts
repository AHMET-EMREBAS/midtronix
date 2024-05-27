/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractControl, ValidatorFn } from '@angular/forms';
import {
  isEmail,
  isStrongPassword,
  isPhoneNumber,
  isEAN,
  isIn,
  isURL,
  isDateString,
  isNumber,
  min,
  minLength,
  maxLength,
  isNumberString,
  isDate,
} from 'class-validator';
import { IFormBuilder } from './form-builder-interface';

export class ValidatorBuilder<T extends Record<string, any> = any> {
  private readonly validatorList: ValidatorFn[] = [];
  private parentInstance!: IFormBuilder<T>;
  constructor(private readonly propertyName: keyof T) {
    if (!propertyName) throw new Error('Property name is required!');
  }
  private __name() {
    return this.propertyName?.toString();
  }

  setParent(parent: IFormBuilder<T>) {
    this.parentInstance = parent;
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
    return this.push((c: AbstractControl) => {
      return c.value ? null : { required: `${this.__name()} is required!` };
    });
  }

  date(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      isDate(new Date(c.value))
        ? null
        : {
            date: `${this.__name()} should be a valid date!`,
          }
    );
  }

  range(start: number, end: number): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      const cValue = parseInt(c.value);
      if (cValue) {
        cValue >= start && cValue <= end
          ? null
          : {
              range: `${this.__name()} should be in range of ${start} and ${end}`,
            };
      }

      return null;
    });
  }

  url(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) =>
      isURL(c.value) ? null : { url: `${this.__name()} should be valid url!` }
    );
  }

  shortText() {
    this.minLength(1);
    this.maxLength(60);
    return this;
  }

  longText() {
    this.maxLength(600);
    return this;
  }

  minLength(value?: number): ValidatorBuilder<T> {
    if (value != undefined)
      return this.push((c: AbstractControl) =>
        c.value?.length < value
          ? {
              minLength: `${this.__name()} should be longer than ${value}!`,
            }
          : null
      );

    return this;
  }

  maxLength(value?: number): ValidatorBuilder<T> {
    if (value != undefined)
      return this.push((c: AbstractControl) =>
        c.value?.length > value
          ? {
              maxLength: `${this.__name()} should be shorter than ${value}!`,
            }
          : null
      );
    return this;
  }

  min(value?: number): ValidatorBuilder<T> {
    if (value != undefined)
      return this.push((c: AbstractControl) =>
        c.value < value
          ? {
              min: `${this.__name()} should be more than ${value}!`,
            }
          : null
      );
    return this;
  }

  max(value?: number): ValidatorBuilder<T> {
    if (value != undefined)
      return this.push((c: AbstractControl) =>
        c.value > value
          ? {
              max: `${this.__name()} should be less than ${value}!`,
            }
          : null
      );
    return this;
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
      (isNumberString(c.value) || isNumber(c.value)) &&
      minLength(c.value, 10) &&
      maxLength(c.value, 13)
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

  isIn(value?: any[]) {
    if (value != undefined)
      return this.push((c: AbstractControl) =>
        isIn(c.value, value)
          ? null
          : { isIn: `${this.__name()} should be one of ${value}` }
      );
    return this;
  }

  isNotIn(value?: any[]) {
    if (value != undefined)
      return this.push((c: AbstractControl) =>
        isIn(c.value, value)
          ? { isNotIn: `${this.__name()} should be none of ${value}` }
          : null
      );
    return this;
  }

  build(): ValidatorFn[] {
    return [...this.validatorList];
  }
}
