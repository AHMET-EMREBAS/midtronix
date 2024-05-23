/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { Property } from '../property';
import { QueryOperator, parseQueryInput } from '@mdtx/common';
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

  switch (operator as QueryOperator) {
    case QueryOperator.CONTAIN:
      return ILike(`%${q}%`);
    case QueryOperator.START_WITH:
      return ILike(`${q}%`);
    case QueryOperator.END_WITH:
      return ILike(`%${q}`);
    case QueryOperator.EQUAL:
      return Equal(q);
    case QueryOperator.IN:
      return In(q.split(','));
    case QueryOperator.MORE_THAN:
      return MoreThan(q);
    case QueryOperator.LESS_THAN:
      return LessThan(q);

    case QueryOperator.MORE_THAN_OR_EQUAL:
      return MoreThanOrEqual(q);
    case QueryOperator.LESS_THAN_OR_EQUAL:
      return LessThanOrEqual(q);

    case QueryOperator.NOT_CONTAIN:
      return Not(ILike(`%${q}%`));
    case QueryOperator.NOT_START_WITH:
      return Not(ILike(`${q}%`));
    case QueryOperator.NOT_END_WITH:
      return Not(ILike(`%${q}`));
    case QueryOperator.NOT_EQUAL:
      return Not(ILike(`${q}`));
    case QueryOperator.NOT_IN:
      return Not(In(q.split(',')));
    case QueryOperator.NOT_LESS_THAN:
      return Not(LessThan(q));
    case QueryOperator.NOT_MORE_THAN:
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
