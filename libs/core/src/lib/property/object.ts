/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { PropertyOptions } from './types';

import {
  applyDecorators,
  IsObject,
  ValidateNested,
  ValidationOptions,
  TypeDef,
} from '../__external';
export class EmptyObject {}

export function __ObjectProperty(options?: PropertyOptions) {
  options = {
    ...options,
    type: 'object',
  };

  const validationOptions: ValidationOptions = { each: !!options.isArray };

  const decorators = [ValidateNested(validationOptions)];

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsObject(validationOptions));

  const { objectType } = options;

  if (!objectType)
    throw new Error('Object type is required for object property');

  push(TypeDef(() => objectType));

  return applyDecorators(...decorators);
}
