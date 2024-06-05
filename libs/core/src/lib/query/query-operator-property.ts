import { Expose, Transform } from 'class-transformer';
import { QueryInput, QueryOperator, parseQueryInput } from '@mdtx/utils';
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
import {
  IsOptional,
  isArray,
  isDateString,
  isNumberString,
} from 'class-validator';
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ApiPropertyType } from '../property';

export type QueryOperatorOptions = {
  type: ApiPropertyType;
};

export function __buildQuery(query: Omit<QueryInput, 'property'>) {
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

  return undefined;
}

export function __buildArrayQuery(query: Omit<QueryInput, 'property'>) {
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

  return undefined;
}

export function ___parseQueryValue(options: QueryOperatorOptions, value: any) {
  switch (options.type) {
    case 'boolean':
      return value === 'true' ? true : value === 'false' ? false : undefined;

    case 'date': {
      console.log('Date Value : ', value);
      return isDateString(value) ? new Date(value) : undefined;
    }
    case 'integer':
      return isNumberString(value) ? parseInt(value) : undefined;

    case 'number':
      return isNumberString(value) ? parseFloat(value) : undefined;

    case 'object':
      return undefined;

    case 'string':
      return value;
  }
  return undefined;
}
export function QueryOperatorProperty(options: QueryOperatorOptions) {
  return applyDecorators(
    ApiProperty({ type: 'string', required: false, nullable: true }),
    IsOptional(),
    Expose(),
    Transform(({ value: preValue }) => {
      const query = parseQueryInput(preValue);

      if (query && query.operator && query.value) {
        const queryValue = ___parseQueryValue(options, query.value);

        console.log(` Query Property Value: `, queryValue);
        if (typeof preValue === 'string') {
          return __buildQuery({ operator: query.operator, value: queryValue });
        } else if (isArray(preValue)) {
          return __buildArrayQuery({
            operator: query.operator,
            value: queryValue,
          });
        }
      }
      return undefined;
    })
  );
}
