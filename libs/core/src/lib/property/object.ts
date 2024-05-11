/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IsObject, ValidateNested, ValidationOptions } from 'class-validator';
import { PropertyOptions } from './types';
import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';

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

  push(Type(() => objectType));

  return applyDecorators(...decorators);
}
