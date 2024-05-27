import {
  applyDecorators,
  ApiProperty,
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  ValidationOptions,
  Exclude,
  Expose,
  Transform,
} from '../__external';
import { PropertyOptions } from './types';
import { __StringProperty } from './string';
import { __NumberProperty } from './number';
import { __BooleanProperty } from './boolean';
import { __DateProperty } from './date';
import { __ObjectProperty } from './object';

export function Property(options?: PropertyOptions) {
  options = {
    ...options,
    type: options?.type ?? 'string',
    required: options?.required ?? false,
    nullable: options?.required === true ? false : true,
    isArray: options?.isArray ?? false,
    description: options?.description ?? undefined,
    example: options?.example ?? undefined,
    default: options?.default ?? undefined,
    format: options?.format ?? options?.type ?? 'string',
  };

  const decorators: PropertyDecorator[] = [ApiProperty({ ...options })];

  const push = (pd: PropertyDecorator) => {
    decorators.push(pd);
  };

  const { type, isArray, required, minItems, maxItems, noValidate, exclude } =
    options;

  const validationOptions: ValidationOptions = { each: isArray };

  if (exclude) push(Exclude());
  else push(Expose());

  if (noValidate) {
    return applyDecorators(...decorators);
  }
  // Required or optional validation
  if (required) push(IsNotEmpty(validationOptions));
  else push(IsOptional(validationOptions));

  // Array validation
  if (isArray) {
    push(IsArray());
    if (minItems) push(ArrayMinSize(minItems));
    if (maxItems) push(ArrayMaxSize(maxItems));
  }

  if (type === 'string') push(__StringProperty(options));
  else if (type === 'number') push(__NumberProperty(options));
  else if (type === 'boolean') push(__BooleanProperty(options));
  else if (type === 'date') push(__DateProperty(options));
  else if (type === 'object') push(__ObjectProperty(options));

  if (options.default) {
    push(
      Transform(({ value }) => {
        if (value == undefined) return options.default;
        return value;
      })
    );
  }

  return applyDecorators(...decorators);
}
