import { UnprocessableEntityException } from '@nestjs/common';
import { Exclude, Transform } from 'class-transformer';
import { isArray, isIn } from 'class-validator';
import { Property } from '../property';

export class SelectDto<T> {
  select!: (keyof T)[];
}

export function CreateSelectDto(properties: string[]) {
  class SelectDto {
    @Property({ type: 'string', isArray: true, noValidate: true })
    @Transform(({ value }) => {
      if (typeof value === 'string') {
        if (isIn(value, properties)) {
          return [value];
        }
        throw new UnprocessableEntityException(
          `${value} is not in ${properties}`
        );
      } else if (isArray(value)) {
        return value.filter((e) => {
          if (isIn(e, properties)) {
            return e;
          }
          throw new UnprocessableEntityException(
            `${e} is not in ${properties}`
          );
        });
      }

      return undefined;
    })
    select!: string[];
  }

  return SelectDto;
}
