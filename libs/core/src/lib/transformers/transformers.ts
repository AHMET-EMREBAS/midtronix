import { Transform } from 'class-transformer';

export const IntegerTransformer = Transform(({ value }) => {
  if (typeof value === 'string') {
    const pvalue = parseInt(value);
    if (isNaN(pvalue)) return undefined;
    return pvalue;
  }
  return value;
});

export const NumberTransformer = Transform(({ value }) => {
  if (typeof value === 'string') {
    const pvalue = parseFloat(value);
    if (isNaN(pvalue)) return undefined;
    return pvalue;
  }
  return value;
});

export const BooleanTransformer = Transform(({ value }) => {
  if (typeof value === 'string') {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    }
    return undefined;
  }
  return value;
});

export const DateTransformer = Transform(({ value }) => {
  if (typeof value === 'string') {
    const dateValue = new Date(value);
    if (isNaN(dateValue.getTime())) {
      return undefined;
    }
    return dateValue;
  }
  return value;
});

export const StringTransformer = Transform(({ value }) => {
  if (typeof value === 'string') {
    const newValue = value.trim();
    if (newValue.length > 0) {
      return newValue;
    }
    return undefined;
  }
  return value;
});

export const DefaultValueTransformer = <T>(defaultValue: T) =>
  Transform(({ value }) => {
    if (value == undefined) {
      return defaultValue;
    }
    return value;
  });
