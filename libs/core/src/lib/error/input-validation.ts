import { UnprocessableEntityException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class InputValidationException extends UnprocessableEntityException {
  constructor(errors: ValidationError[]) {
    super({
      message: 'Input Validation Errror',
      errors: errors
        .map((e) => {
          return { [e.property]: Object.values(e.constraints || {}) };
        })
        .flat(),
    });
  }
}
