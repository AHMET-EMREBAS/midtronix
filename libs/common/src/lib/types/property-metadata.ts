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
  | 'number'
  | 'password'
  | 'button-toggle'
  | 'textarea'
  | 'checkbox'
  | 'autocomplete-one'
  | 'autocomplete-many'
  | 'select-one-entity'
  | 'select-many-entity'
  | 'select-one-enum'
  | 'select-many-enum'
  | 'chip-select';

export type StringFormat =
  | 'email'
  | 'password'
  | 'phone'
  | 'ean'
  | 'barcode'
  | 'name'
  | 'uuid';

export type IInputOption = {
  id: number;
  name: string;
};

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
  when?: (value: T) => boolean;
  mapValue?: (value: T) => string;
  statusClass?: (value: T) => StatusClass;
  order?: number;
  inline?: boolean;
  block?: boolean;
  control?: FormControl;
  format?: StringFormat;
  groupName?: string;
  enum?: string[];
  entityName?: string;
  labelKey?: KeyOf<T>;
};
