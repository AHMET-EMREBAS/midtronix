import { UnprocessableEntityException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export function parseValiationErrors(errors: ValidationError[]) {
  const __errors = errors.map((e) => {
    return { [e.property]: { ...e.constraints } };
  });

  if (__errors.length > 0) return __errors.reduce((p, c) => ({ ...p, ...c }));

  return 'Not Defined';
}
export class InputValidationException extends UnprocessableEntityException {
  constructor(errors: ValidationError[]) {
    super({
      message: 'Input Validation Errror',
      errors: parseValiationErrors(errors),
    });
  }
}
