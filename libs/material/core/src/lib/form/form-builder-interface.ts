/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from '@angular/forms';
import { ValidatorBuilder } from './validator-builder';

export interface IFormBuilder<T extends Record<string, any>> {
  /**
   * Set controller
   * @param pn
   * @param value
   */
  setControl(pn: keyof T, value: FormControl): IFormBuilder<T>;

  /**
   * Get controller
   * @param pn
   * @param value
   */
  getControl(pn: keyof T): FormControl | undefined;

  /**
   * Set validator
   * @param pn
   * @param value
   */
  setValidator(pn: keyof T, vb: ValidatorBuilder<T>): IFormBuilder<T>;

  /**
   * Get validator
   * @param pn
   * @param value
   */
  getValidator(pn: keyof T): ValidatorBuilder;

  /**
   * Add property
   * @param pn
   * @param value
   */
  add(pn: keyof T): ValidatorBuilder<T>;

  /**
   * Initialize controllers
   * @param pn
   * @param value
   */
  init(): IFormBuilder<T>;

  /**
   * Get controllers
   * @param pn
   * @param value
   */
  controls(props?: (keyof T)[]): Partial<Record<keyof T, FormControl>>;

  lock(): Pick<IFormBuilder<T>, 'getControl' | 'getValidator' | 'controls'>;
}
