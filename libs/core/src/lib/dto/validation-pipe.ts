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
};
export const ValidationPipe = new __ValidationPipe({});

export function CreateValidationPipe(expectedType: Type) {
  return new __ValidationPipe({
    ...validationPipeOptions,
    expectedType,
  });
}
