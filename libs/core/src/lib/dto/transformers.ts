import { Transform } from 'class-transformer';
import {
  isArray,
  isBoolean,
  isBooleanString,
  isNumber,
  isNumberString,
  isObject,
  isString,
} from 'class-validator';

export function IntegerTransformer() {
  return Transform(({ value }) => {
    if (isNumber(value)) return value;
    return isNumberString(value) ? parseInt(value) : undefined;
  });
}
export function NumberTransformer() {
  return Transform(({ value }) => {
    if (isNumber(value)) return value;
    return isNumberString(value) ? parseFloat(value) : undefined;
  });
}

export function BooleanTransformer() {
  return Transform(({ value }) => {
    if (isBoolean(value)) return value;
    return isBooleanString(value)
      ? value === 'true'
        ? true
        : false
      : undefined;
  });
}

export function DefaultValueTransformer<T>(defaultValue: T) {
  return Transform(({ value }) => {
    return value ?? defaultValue;
  });
}

/**
 * Parse URL Query object into actual object
 * @returns Record<string,string>
 */
export function ObjectTransformer() {
  return Transform(({ value }) => {
    if (isObject(value)) return value;

    const getPairs = (text: string) => {
      if (isString(text)) {
        const [key, value] = text.split(':');
        if (key && value) {
          return { [key]: value };
        }
      }
      return undefined;
    };
    if (isArray(value)) {
      const entries = value.map(getPairs);
      if (entries) return entries.reduce((p, c) => ({ ...p, ...c }));

      return undefined;
    } else if (isString(value)) {
      return getPairs(value);
    }

    return undefined;
  });
}



// Query Transformers 

