import {
  ValidationPipe as NestValidationPipe,
  UnprocessableEntityException,
} from '@nestjs/common';

export const ValidationPipe = new NestValidationPipe({
  transform: true,
  exceptionFactory(error) {
    return new UnprocessableEntityException({
      message: 'Invalid Input',
      messages: error
        .map(
          (e) =>
            [
              e.property,
              [
                ...Object.values(e.constraints || {}),
                ...(e.children
                  ?.map((c) => Object.values(c.constraints || {}))
                  .flat() || []),
              ],
            ] as [string, string[]]
        )
        .map(([k, v]) => ({ [k]: v }))
        .reduce((p, c) => ({ ...p, ...c })),
    });
  },
});
