import { IsBoolean } from 'class-validator';
import { PropertyOptions } from './types';
import { applyDecorators } from '@nestjs/common';

/**
 * Validate boolean value by type
 * @param options {@link PropertyOptions}
 */
export function __Boolean(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  options = { ...options, type: 'boolean' };

  const vo = { each: !!options.isArray };

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsBoolean(vo));

  return applyDecorators(...decorators);
}
