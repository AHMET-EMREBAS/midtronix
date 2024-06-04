import { Expose, Transform } from 'class-transformer';
import { QueryOperator, parseQueryInput } from '@mdtx/utils';
import {
  Equal,
  ILike,
  In,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';
import { IsOptional, isArray } from 'class-validator';
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export function QueryOperatorProperty() {
  return applyDecorators(
    ApiProperty({ type: 'string', required: false, nullable: true }),
    IsOptional(),
    Expose(),
    Transform(({ value }) => {
      const query = parseQueryInput(value);
      if (typeof value === 'string') {
        if (query) {
          if (query.value && query.operator) {
            const queryValue = query.value;
            switch (query.operator) {
              case QueryOperator.CONTAIN:
                return ILike(`%${queryValue}%`);
              case QueryOperator.END_WITH:
                return ILike(`${queryValue}%`);
              case QueryOperator.START_WITH:
                return ILike(`%${queryValue}`);
              case QueryOperator.EQUAL:
                return Equal(queryValue);
              case QueryOperator.LESS_THAN:
                return LessThan(queryValue);
              case QueryOperator.LESS_THAN_OR_EQUAL:
                return LessThanOrEqual(queryValue);
              case QueryOperator.MORE_THAN:
                return MoreThan(queryValue);
              case QueryOperator.MORE_THAN_OR_EQUAL:
                return MoreThanOrEqual(queryValue);

              case QueryOperator.NOT_CONTAIN:
                return Not(ILike(`%${queryValue}%`));
              case QueryOperator.NOT_END_WITH:
                return Not(ILike(`${queryValue}%`));
              case QueryOperator.NOT_START_WITH:
                return Not(ILike(`%${queryValue}`));
              case QueryOperator.NOT_EQUAL:
                return Not(Equal(queryValue));
              case QueryOperator.NOT_LESS_THAN:
                return Not(LessThan(queryValue));
              case QueryOperator.NOT_MORE_THAN:
                return Not(MoreThan(queryValue));
            }
          }
        }
      } else if (isArray(value)) {
        if (query) {
          const queryValue = query.value;
          switch (query?.operator) {
            case QueryOperator.IN: {
              if (typeof queryValue == 'string') {
                return In(queryValue.split(','));
              }
              return undefined;
            }
            case QueryOperator.NOT_IN: {
              if (typeof queryValue == 'string') {
                return Not(In(queryValue.split(',')));
              }
              return undefined;
            }
          }
        }
      }
      return undefined;
    })
  );
}
