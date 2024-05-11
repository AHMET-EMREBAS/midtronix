import { IsDateString, ValidationOptions } from 'class-validator';
import { PropertyOptions } from './types';
import { applyDecorators } from '@nestjs/common';

/**
 * Validate date value by type
 * @param options {@link PropertyOptions}
 */
export function __DateProperty(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  options = {
    ...options,
    type: 'string',
    example: new Date().toLocaleDateString(),
  };

  const validationOptions: ValidationOptions = { each: !!options.isArray };

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsDateString({}, validationOptions));

  return applyDecorators(...decorators);
}