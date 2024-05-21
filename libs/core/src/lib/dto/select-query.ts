import { UnprocessableEntityException } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { isArray, isIn } from 'class-validator';
import { Property } from '../property';

export function CreateSelectQuery(properties: string[]) {
  class SelectQuery {
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

  return SelectQuery;
}
