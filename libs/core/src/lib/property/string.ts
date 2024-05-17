import {
  IsDate,
  IsEAN,
  IsEmail,
  IsStrongPassword,
  MaxLength,
  MinLength,
  IsUUID,
  IsPhoneNumber,
  IsIn,
  IsUrl,
  isNumber,
  isArray,
  IsString,
  ValidationOptions,
  applyDecorators,
} from '../__external';
import { PropertyOptions } from './types';

/**
 * Validate string value by maxLength, minLength, format, and enum
 * @param options {@link PropertyOptions}
 */
export function __StringProperty(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [];

  options = { ...options, type: 'string' };

  const validationOptions: ValidationOptions = { each: !!options.isArray };

  const { minLength, maxLength, format, enum: enums } = options;

  const push = (pd: PropertyDecorator) => decorators.push(pd);

  push(IsString(validationOptions));

  if (isNumber(minLength)) push(MinLength(minLength, validationOptions));
  if (isNumber(maxLength)) push(MaxLength(maxLength, validationOptions));
  if (isArray(enums)) push(IsIn(enums, validationOptions));

  if (format) {
    if (format === 'email') push(IsEmail(undefined, validationOptions));
    else if (format === 'password')
      push(IsStrongPassword(undefined, validationOptions));
    else if (format === 'barcode') {
      push(MinLength(10));
      push(MaxLength(13));
    } else if (format === 'date') push(IsDate(validationOptions));
    else if (format === 'uuid') push(IsUUID('4', validationOptions));
    else if (format === 'url') push(IsUrl(undefined, validationOptions));
    else if (format === 'phone') {
      push(MinLength(10));
      push(MaxLength(20));
    }
  }

  return applyDecorators(...decorators);
}
