import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { Property } from '../property';
import { QueryOprator, parseQueryInput } from '@mdtx/common';
import { ILike, In, LessThan, MoreThan, Not } from 'typeorm';

export function QueryProperty() {
  return applyDecorators(
    Property({ type: 'string', noValidate: true }),
    Transform(({ value }) => {
      if (
        typeof value === 'string' &&
        value.includes(':') &&
        value.length < 100
      ) {
        const queryInput = parseQueryInput(value);

        if (queryInput) {
          const { operator, value: q } = queryInput;
          if (operator && q) {
            switch (operator as QueryOprator) {
              case QueryOprator.CONTAIN:
                return ILike(`%${q}%`);
              case QueryOprator.END_WITH:
                return ILike(`%${q}`);
              case QueryOprator.EQUAL:
                return ILike(`${q}`);
              case QueryOprator.IN:
                return In(q.split(','));
              case QueryOprator.LESS_THAN:
                return LessThan(q);
              case QueryOprator.MORE_THAN:
                return MoreThan(q);

              case QueryOprator.NOT_CONTAIN:
                return Not(ILike(`%${q}%`));
              case QueryOprator.NOT_END_WITH:
                return Not(ILike(`%${q}`));
              case QueryOprator.NOT_EQUAL:
                return Not(ILike(`${q}`));
              case QueryOprator.NOT_IN:
                return Not(In(q.split(',')));
              case QueryOprator.NOT_LESS_THAN:
                return Not(LessThan(q));
              case QueryOprator.NOT_MORE_THAN:
                return Not(MoreThan(q));
            }
          }
        }
        // TODO:
      }
      return undefined;
    })
  );
}
