import { ValidationPipe as __ValidationPipe } from '@nestjs/common';

export const ValidationPipe = new __ValidationPipe({
  transform: true,
  exceptionFactory(errors) {
    return errors;
  },
});
