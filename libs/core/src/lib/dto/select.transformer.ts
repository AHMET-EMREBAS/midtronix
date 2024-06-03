import { UnprocessableEntityException } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { isArray, isIn } from 'class-validator';

export function SelectTransformer<T>(fields: (keyof T)[]) {
  return Transform(() => {
    return Transform(({ value }) => {
      if (typeof value === 'string') {
        if (isIn(value, fields)) {
          return [value];
        }
        throw new UnprocessableEntityException(`${value} is not in ${fields}`);
      } else if (isArray(value)) {
        return value.filter((e) => {
          if (isIn(e, fields)) {
            return e;
          }
          throw new UnprocessableEntityException(`${e} is not in ${fields}`);
        });
      }

      return undefined;
    });
  });
}
