import {
  IsDate,
  IsEAN,
  IsEmail,
  IsIn,
  IsStrongPassword,
  MaxLength,
  MinLength,
  ArrayMinSize,
  ArrayMaxSize,
  IsUUID,
  IsUrl,
  IsPhoneNumber,
  isNumber,
  isArray,
  IsString,
  IsArray,
} from 'class-validator';
import { PropertyOptions } from './types';
import { applyDecorators } from '@nestjs/common';

/**
 * Validate string value
 * @param options {@link PropertyOptions}
 */
export function __StringProperty(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  options = { ...options, type: 'string' };

  const vo = { each: !!options.isArray };

  const { minLength, maxLength, format, enum: enums } = options;

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsString(vo));

  if (options.isArray) {
    push(IsArray());
    if (options.minItems) push(ArrayMinSize(options.minItems));
    if (options.maxItems) push(ArrayMaxSize(options.maxItems));
  }

  if (isNumber(minLength)) push(MinLength(minLength, vo));
  if (isNumber(maxLength)) push(MaxLength(maxLength, vo));
  if (isArray(enums)) push(IsIn(enums, vo));

  if (format) {
    if (format === 'email') push(IsEmail(undefined, vo));
    else if (format === 'password') push(IsStrongPassword(undefined, vo));
    else if (format === 'barcode') push(IsEAN(vo));
    else if (format === 'date') push(IsDate(vo));
    else if (format === 'uuid') push(IsUUID(undefined, vo));
    else if (format === 'url') push(IsUrl(undefined, vo));
    else if (format === 'phone') push(IsPhoneNumber(undefined, vo));
  }

  return applyDecorators(...decorators);
}
