import {
  Type,
  UnprocessableEntityException,
  ValidationPipeOptions,
  ValidationPipe as __ValidationPipe,
} from '@nestjs/common';
import { InputValidationError } from '../response';

const validationPipeOptions: ValidationPipeOptions = {
  transform: true,
  exceptionFactory(errors) {
    throw new UnprocessableEntityException({
      message: 'Invalid Input',
      errors: errors.map((e) => {
        return new InputValidationError({
          property: e.property,
          constraints: e.constraints ?? {},
        });
      }),
    });
  },

  transformOptions: {
    excludeExtraneousValues: true,
    exposeUnsetFields: false,
  },
};
export const ValidationPipe = new __ValidationPipe({
  ...validationPipeOptions,
});

export function CreateValidationPipe(expectedType: Type) {
  return new __ValidationPipe({
    ...validationPipeOptions,
    expectedType: expectedType,
  });
}
