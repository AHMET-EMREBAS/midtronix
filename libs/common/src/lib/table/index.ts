import { PropertyType } from '../types/type';

export interface __TableColumnOption<T> {
  name: string;
  label?: string;
  value?: (value: T) => string;
  prefix?: string;
  suffix?: string;
  status?: (value: T) => 'success' | 'error' | 'warning' | 'disabled' | 'none';
  visible?: (value: T) => boolean;
  order?: number;
}

export type TableColumnOption<T> = PropertyType<
  Partial<T>,
  __TableColumnOption<T>
>;

export interface TableRowOption<T> {
  value?: (value: T) => T;
}
