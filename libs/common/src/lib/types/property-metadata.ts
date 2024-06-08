/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyOf } from './keysof';

export type StatusClass =
  | 'success'
  | 'error'
  | 'warning'
  | 'attention'
  | 'current';

export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'date'
  | 'object';

export type InputType =
  | 'text'
  | 'textarea'
  | 'checkbox'
  | 'select-one'
  | 'select-many'
  | 'autocomplete'
  | 'autocomplete-many'
  | 'select-entity'
  | 'select-many-entity';

export type StringFormat =
  | 'email'
  | 'password'
  | 'phone'
  | 'ean'
  | 'barcode'
  | 'name'
  | 'uuid';

export type PropertyMetadata<T, FormControl = any> = {
  name: KeyOf<T>;
  type?: PropertyType;
  inputType?: InputType;
  isArray?: boolean;
  label?: string;
  prefixText?: string;
  suffixText?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  min?: number;
  max?: number;
  dependsOn?: KeyOf<T>;
  moreThanProperty?: KeyOf<T>;
  lessThanProperty?: KeyOf<T>;
  equalToProperty?: KeyOf<T>;
  mapValue?: (value: T) => string;
  statusClass?: (value: T) => StatusClass;
  order?: number;
  inline?: boolean;
  block?: boolean;
  control?: FormControl;
  format?: StringFormat;
  groupName?: string;
  enum?: string[];
};
