import {
  Type,
  ValidationPipeOptions,
  ValidationPipe as __ValidationPipe,
} from '@nestjs/common';
import { InputValidationException } from '../error';

const validationPipeOptions: ValidationPipeOptions = {
  transform: true,
  exceptionFactory(errors) {
    return new InputValidationException(errors);
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
