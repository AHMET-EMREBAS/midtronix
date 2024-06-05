import { ValidationPipe as __ValidationPipe } from '@nestjs/common';
import { InputValidationException } from '../error';

export const ValidationPipe = new __ValidationPipe({
  transform: true,
  exceptionFactory(errors) {
    return new InputValidationException(errors);
  },
});
