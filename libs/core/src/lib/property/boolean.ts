import { IsBoolean, ValidationOptions } from 'class-validator';
import { PropertyOptions } from './types';
import { applyDecorators } from '@nestjs/common';

/**
 * Validate boolean value by type
 * @param options {@link PropertyOptions}
 */
export function __BooleanProperty(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  options = { ...options, type: 'boolean' };

  const validationOptions:ValidationOptions = { each: !!options.isArray };

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsBoolean(validationOptions));

  return applyDecorators(...decorators);
}
