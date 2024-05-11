import { IsDateString } from 'class-validator';
import { PropertyOptions } from './types';
import { applyDecorators } from '@nestjs/common';

/**
 * Validate boolean value by type
 * @param options {@link PropertyOptions}
 */
export function __Date(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  options = {
    ...options,
    type: 'string',
    example: new Date().toLocaleDateString(),
  };

  const vo = { each: !!options.isArray };

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsDateString({}, vo));

  return applyDecorators(...decorators);
}
