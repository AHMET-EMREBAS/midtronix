import { applyDecorators } from '@nestjs/common';
import {
  ApiProperty,
  ApiPropertyOptions as __ApiPropertyOptions,
} from '@nestjs/swagger';
import {
  MinLength,
  MaxLength,
  Min,
  Max,
  IsNotEmpty,
  ValidationOptions,
  ArrayMaxSize,
  ArrayMinSize,
  IsEmail,
  IsStrongPassword,
  IsPhoneNumber,
  IsEAN,
  IsIn,
  IsString,
  IsNumber,
  IsInt,
  IsBoolean,
  IsDate,
  Length,
  IsOptional,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import {
  IsLessThan,
  IsLessThanOrEqual,
  IsMoreThan,
  IsMoreThanOrEqual,
} from '../validators';
import {
  BooleanTransformer,
  DateTransformer,
  IntegerTransformer,
  NumberTransformer,
  StringTransformer,
} from '../transformers';

export type ApiPropertyType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'integer'
  | 'date';

export function resolveSwaggerType(type: ApiPropertyType) {
  return type === 'date' ? 'string' : type;
}

export type ApiPropertyOptions = __ApiPropertyOptions & {
  type: ApiPropertyType;
  exclude?: true;
  enum?: string[];
  moreThan?: string;
  lessThan?: string;
  moreThanOrEqual?: string;
  lessThanOrEqual?: string;
};

export function Property(options: ApiPropertyOptions) {
  const required = options.required === true;
  const nullable = !required;
  const isArray = options.isArray === true;

  const vo: ValidationOptions = { each: isArray };

  const decorators: PropertyDecorator[] = [
    ApiProperty({
      ...options,
      required,
      nullable,
      type: resolveSwaggerType(options.type),
    }),
  ];

  const {
    type,
    exclude,
    minLength,
    maxLength,
    minimum,
    maximum,
    maxItems,
    minItems,
    enum: enums,
    format,
    moreThan,
    lessThan,
    moreThanOrEqual,
    lessThanOrEqual,
  } = options;

  if (exclude === true) {
    decorators.push(Exclude());
  } else {
    decorators.push(Expose());
  }

  // ######################### Validators Start ######################

  // ########################## Type Validators ######################
  if (type === 'string') decorators.push(IsString(vo));
  else if (type === 'number') decorators.push(IsNumber(undefined, vo));
  else if (type === 'integer') decorators.push(IsInt(vo));
  else if (type === 'boolean') decorators.push(IsBoolean(vo));
  else if (type === 'date') decorators.push(IsDate());

  // ########################## Type Validators End ######################

  if (required) {
    decorators.push(IsNotEmpty(vo));
  } else {
    decorators.push(IsOptional(vo));
  }

  if (minLength) decorators.push(MinLength(minLength, vo));
  if (maxLength) decorators.push(MaxLength(maxLength, vo));
  if (minimum) decorators.push(Min(minimum, vo));
  if (maximum) decorators.push(Max(maximum, vo));
  if (maxItems) decorators.push(ArrayMaxSize(maxItems, vo));
  if (minItems) decorators.push(ArrayMinSize(minItems, vo));

  // ########################## Format validators start #########################

  if (format === 'email') decorators.push(IsEmail(undefined, vo));
  if (format === 'password') decorators.push(IsStrongPassword(undefined, vo));
  if (format === 'phone') decorators.push(IsPhoneNumber(undefined, vo));
  if (format === 'ean') decorators.push(IsEAN(vo));
  if (format === 'barcode') decorators.push(Length(6, 13, vo));
  if (format === 'name') decorators.push(Length(3, 50, vo));

  // ########################## Format validators end #########################

  // ######################### Comparison validators start ####################

  if (moreThan != undefined) decorators.push(IsMoreThan(moreThan));
  if (lessThan != undefined) decorators.push(IsLessThan(lessThan));

  if (moreThanOrEqual != undefined)
    decorators.push(IsMoreThanOrEqual(moreThanOrEqual));

  if (lessThanOrEqual != undefined)
    decorators.push(IsLessThanOrEqual(lessThanOrEqual));

  if (enums && enums.length > 0) decorators.push(IsIn(enums));

  // ######################### Comparison validators end ####################

  // ######################### Validators End ######################

  // ############################## Trasnformers ########################
  if (type === 'integer') decorators.push(IntegerTransformer);
  else if (type === 'number') decorators.push(NumberTransformer);
  else if (type === 'boolean') decorators.push(BooleanTransformer);
  else if (type === 'date') decorators.push(DateTransformer);
  else if (type === 'string') decorators.push(StringTransformer);

  // ############################## Trasnformers End ########################

  return applyDecorators(...decorators);
}
