/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from '@angular/forms';
import { ValidatorBuilder } from './validator-builder';
import { IFormBuilder } from './form-builder-interface';

export class FormGroupBuilder<T extends Record<string, any>>
  implements IFormBuilder<T>
{
  private readonly validatorsMap = new Map<keyof T, ValidatorBuilder<T>>();
  private readonly formControlMap = new Map<keyof T, FormControl>();

  constructor(protected readonly formName = 'Form Name') {}

  setControl(propertyName: keyof T, value: FormControl) {
    this.formControlMap.set(propertyName, value);
    return this;
  }

  getControl(propertyName: keyof T): FormControl | undefined {
    return this.formControlMap.get(propertyName);
  }

  setValidator(propertyName: keyof T, validatorBuilder: ValidatorBuilder<T>) {
    this.validatorsMap.set(propertyName, validatorBuilder);

    return this;
  }

  getValidator(propertyName: keyof T): ValidatorBuilder<T> {
    const v = this.validatorsMap.get(propertyName);

    if (!v) throw new Error(`${propertyName.toString()} validator not found`);
    return v;
  }

  add(propertyName: keyof T): ValidatorBuilder<T> {
    const fn = new ValidatorBuilder<T>(propertyName.toString());
    this.setValidator(propertyName, fn);
    return fn;
  }

  init(): IFormBuilder<T> {
    for (const [pn, vb] of this.validatorsMap.entries()) {
      const control = new FormControl(null, vb?.build() ?? []);
      this.setControl(pn, control);
    }
    return this;
  }

  /**
   * Create new controls and attach the validators
   * @param properties
   * @returns
   */
  controls(properties?: (keyof T)[]): Partial<Record<keyof T, FormControl>> {
    const form: Partial<Record<keyof T, FormControl>> = {};
    for (const [pn, vb] of this.validatorsMap.entries()) {
      if (properties && properties.length > 0 && !properties.includes(pn)) {
        continue;
      }
      const control = new FormControl(null, vb?.build() ?? []);
      form[pn] = control;
    }
    return form;
  }

  lock(): Pick<IFormBuilder<T>, 'getControl' | 'getValidator' | 'controls'> {
    return this;
  }
}
