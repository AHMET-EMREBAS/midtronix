import { TypeProperty } from './types';

export interface __PropertyMetadata<T> {
  name: string;
  label?: string;
  value?: (value: T) => string;
  prefix?: string;
  suffix?: string;
  status?: (value: T) => 'success' | 'error' | 'warning' | 'disabled' | 'none';
  visible?: (value: T) => boolean;
  order?: number;

  validators?: {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
    password?: boolean;
  };
}

export type EntityMetadata<T> = TypeProperty<Partial<T>, __PropertyMetadata<T>>;
