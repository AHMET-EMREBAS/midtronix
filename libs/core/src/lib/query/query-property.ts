/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { Property } from '../property';
import { QueryOprator, parseQueryInput } from '@mdtx/common';
import {
  ILike,
  In,
  LessThan,
  MoreThan,
  Not,
  And,
  FindOperator,
  Equal,
  LessThanOrEqual,
  MoreThanOrEqual,
} from 'typeorm';
import { isArray } from 'class-validator';

export function toQueryOperator(queryString: string) {
  const queryInput = parseQueryInput(queryString);

  if (queryInput && queryInput.operator && queryInput.value) {
    // Continue
  } else {
    return undefined;
  }

  const { operator, value: q } = queryInput;

  switch (operator as QueryOprator) {
    case QueryOprator.CONTAIN:
      return ILike(`%${q}%`);
    case QueryOprator.START_WITH:
      return ILike(`${q}%`);
    case QueryOprator.END_WITH:
      return ILike(`%${q}`);
    case QueryOprator.EQUAL:
      return Equal(q);
    case QueryOprator.IN:
      return In(q.split(','));
    case QueryOprator.MORE_THAN:
      return MoreThan(q);
    case QueryOprator.LESS_THAN:
      return LessThan(q);

    case QueryOprator.MORE_THAN_OR_EQUAL:
      return MoreThanOrEqual(q);
    case QueryOprator.LESS_THAN_OR_EQUAL:
      return LessThanOrEqual(q);

    case QueryOprator.NOT_CONTAIN:
      return Not(ILike(`%${q}%`));
    case QueryOprator.NOT_START_WITH:
      return Not(ILike(`${q}%`));
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

  return undefined;
}

export function QueryProperty() {
  return applyDecorators(
    Property({ type: 'string', isArray: true, noValidate: true }),
    Transform(({ value }) => {
      if (typeof value === 'string') {
        return toQueryOperator(value);
      } else if (isArray(value)) {
        const operators = value
          .filter((e) => typeof e === 'string')
          .map(toQueryOperator)
          .filter((e) => e) as FindOperator<any>[];

        if (operators.length > 0) return And(...operators);
      }
      return undefined;
    })
  );
}
