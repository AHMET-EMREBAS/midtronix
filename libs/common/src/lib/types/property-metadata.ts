export type StatusClass =
  | 'succes'
  | 'error'
  | 'warning'
  | 'attention'
  | 'current';

export type PropertyMetadata<T> = {
  name?: keyof T;
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
  moreThanProperty?: keyof T;
  lessThanProperty?: keyof T;
  equalToProperty?: keyof T;
  mapValue?: (value: T) => string;
  statusClass?: (value: T) => StatusClass;
};
