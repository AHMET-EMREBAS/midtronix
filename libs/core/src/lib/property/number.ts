import {
  IsIn,
  isNumber,
  isArray,
  IsNumber,
  Max,
  Min,
  ValidationOptions,
} from 'class-validator';
import { PropertyOptions } from './types';
import { applyDecorators } from '@nestjs/common';

/**
 * Validate number value by maximum, minium, and enum
 * @param options {@link PropertyOptions}
 */
export function __NumberProperty(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  options = { ...options, type: 'number' };

  const validationOptions: ValidationOptions = { each: !!options.isArray };

  const { maximum, minimum, enum: enums } = options;

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsNumber(undefined, validationOptions));

  if (isNumber(maximum)) push(Max(maximum, validationOptions));
  if (isNumber(minimum)) push(Min(minimum, validationOptions));
  if (isArray(enums)) push(IsIn(enums, validationOptions));

  return applyDecorators(...decorators);
}
