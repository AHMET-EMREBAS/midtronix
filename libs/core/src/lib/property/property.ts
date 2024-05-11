import { applyDecorators } from '@nestjs/common';
import { ApiPropertyOptions, ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import {
  IsDate,
  IsEAN,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';
import { IDDto } from '../dto';
import { PropertyOptions } from './types';


export function Property(options?: PropertyOptions) {
  const decorators: PropertyDecorator[] = [
    Expose(),
    ApiProperty({
      ...options,
      required: !!options?.required,
      nullable: !options?.required,
    }),
  ];

  const isArray = !!options?.isArray;
  const vo: ValidationOptions = { each: isArray };

  if (options?.required == true) {
    decorators.push(IsNotEmpty(vo));
  } else {
    decorators.push(IsOptional(vo));
  }

  if (options) {
    if (options.type === 'string') {
      const { minLength, maxLength, format, enum: enums } = options;

      if (minLength != undefined) decorators.push(MinLength(minLength, vo));

      if (maxLength != undefined) decorators.push(MaxLength(maxLength, vo));

      if (enums != undefined) decorators.push(IsIn(enums as string[]));

      if (format) {
        if (format === 'email') decorators.push(IsEmail(undefined, vo));
        if (format === 'password')
          decorators.push(IsStrongPassword(undefined, vo));
        if (format === 'barcode') decorators.push(IsEAN(vo));

        if (format === 'date') decorators.push(IsDate(vo));
      }
    } else if (options.type === 'number') {
      const { minimum, maximum } = options;

      if (minimum != undefined) decorators.push(Min(minimum, vo));
      if (maximum != undefined) decorators.push(Max(maximum, vo));
    }
  }

  return applyDecorators(...decorators);
}

export function ObjectIdProperty(options?: ApiPropertyOptions) {
  const vo: ValidationOptions = { each: !options?.isArray };
  return applyDecorators(
    Expose(),
    ApiProperty({ ...options, type: 'object', isArray: !!options?.isArray }),
    options?.required ? IsNotEmpty(vo) : IsOptional(vo),
    ValidateNested(vo),
    Type(() => IDDto)
  );
}
