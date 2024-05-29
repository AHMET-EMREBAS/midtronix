import {
  ValidationOptions,
  applyDecorators,
  IsDateString,
  Transform,
} from '../__external';
import { PropertyOptions } from './types';

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

  return applyDecorators(
    Transform(({ value }) => {
      if (value) {
        const d = new Date(value).toISOString();
        if (d) {
          return d;
        }
      }

      return value;
    }),

    ...decorators
  );
}
