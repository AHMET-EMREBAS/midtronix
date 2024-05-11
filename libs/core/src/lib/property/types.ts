import { Type } from '@nestjs/common';
import { ApiPropertyOptions } from '@nestjs/swagger';

export type PropertyType = 'string' | 'number' | 'boolean' | 'date' | 'object';

export type StringFormat =
  | 'date'
  | 'email'
  | 'password'
  | 'barcode'
  | 'uuid'
  | 'phone'
  | 'url'
  | PropertyType;

export type __ExtendedPropertyOptions = {
  type?: PropertyType;
  format?: StringFormat;
  objectType?: Type;
  noValidate?: boolean;
  exclude?: boolean;
};
export type PropertyOptions = ApiPropertyOptions & __ExtendedPropertyOptions;
