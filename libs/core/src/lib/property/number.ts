import { IsIn, isNumber, isArray, IsNumber, Max, Min } from 'class-validator';
import { PropertyOptions } from './types';
import { applyDecorators } from '@nestjs/common';

/**
 * Validate number value by maximum, minium, and enum
 * @param options {@link PropertyOptions}
 */
export function __NumberProperty(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  options = { ...options, type: 'number' };

  const vo = { each: !!options.isArray };

  const { maximum, minimum, enum: enums } = options;

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsNumber(undefined, vo));

  if (isNumber(maximum)) push(Max(maximum, vo));
  if (isNumber(minimum)) push(Min(minimum, vo));
  if (isArray(enums)) push(IsIn(enums, vo));

  return applyDecorators(...decorators);
}
