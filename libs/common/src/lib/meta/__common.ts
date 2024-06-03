export type __EntityPropertyValidator<T> = {
  required?: boolean;
  enum?: string[];
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  email?: boolean;
  isArray?: boolean;
};

export type InputType = 'string' | 'number' | 'boolean' | 'date' | 'object';

export type InputComponent =
  | 'text'
  | 'number'
  | 'date'
  | 'checkbox'
  | 'slide-toggle'
  | 'radio';

export type __EntityRelationMetadata<T> = {
  type: 'one' | 'many' | 'owner';
  target: string;
};

export type __EntityPropertyMetadata<T> = {
  name?: string;
  type?: InputType;
  label?: string;
  value?: (value: T) => string;
  prefix?: string;
  suffix?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  status?: (value: T) => 'success' | 'error' | 'warning' | 'disabled' | 'none';
  visible?: (value: T) => boolean;
  hidden?: boolean;
  order?: number;
  create?: boolean;
  update?: boolean;
  search?: boolean;
  sort?: boolean;
  inputComponent?: InputComponent;
  validators?: __EntityPropertyValidator<T>;
  relation?: __EntityRelationMetadata<T>;
};

export type EntityMetadata<T> = Readonly<{
  properties: Record<keyof T, __EntityPropertyMetadata<T>>;
}>;

