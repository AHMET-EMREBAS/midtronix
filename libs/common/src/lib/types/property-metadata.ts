import { KeyOf } from './keysof';

export type StatusClass =
  | 'succes'
  | 'error'
  | 'warning'
  | 'attention'
  | 'current';

export type PropertyMetadata<T> = {
  name: KeyOf<T>;
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
  moreThanProperty?: KeyOf<T>;
  lessThanProperty?: KeyOf<T>;
  equalToProperty?: KeyOf<T>;
  mapValue?: (value: T) => string;
  statusClass?: (value: T) => StatusClass;
  order?: number;
};
