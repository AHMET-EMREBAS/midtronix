const OperatorList = [
  'eq',
  'mt',
  'lt',
  'mte',
  'lte',
  'sw',
  'ew',
  'cn',
  'in',
  'neq',
  'nmt',
  'nlt',
  'nsw',
  'new',
  'ncn',
  'nin',
];

export enum QueryOperator {
  EQUAL = 'eq',
  MORE_THAN = 'mt',
  LESS_THAN = 'lt',
  MORE_THAN_OR_EQUAL = 'mte',
  LESS_THAN_OR_EQUAL = 'lte',
  START_WITH = 'sw',
  END_WITH = 'ew',
  CONTAIN = 'cn',
  IN = 'in',
  NOT_EQUAL = 'neq',
  NOT_MORE_THAN = 'nmt',
  NOT_LESS_THAN = 'nlt',
  NOT_START_WITH = 'nsw',
  NOT_END_WITH = 'new',
  NOT_CONTAIN = 'ncn',
  NOT_IN = 'nin',
}

export class QueryBuilder {
  static EQUAL(query: string): string {
    return createQueryValue({
      operator: QueryOperator.EQUAL,
      value: query,
    });
  }

  static MORE_THAN(query: string): string {
    return createQueryValue({
      operator: QueryOperator.MORE_THAN,
      value: query,
    });
  }

  static LESS_THAN(query: string): string {
    return createQueryValue({
      operator: QueryOperator.LESS_THAN,
      value: query,
    });
  }

  static MORE_THAN_OR_EQUAL(query: string): string {
    return createQueryValue({
      operator: QueryOperator.MORE_THAN_OR_EQUAL,
      value: query,
    });
  }

  static LESS_THAN_OR_EQUAL(query: string): string {
    return createQueryValue({
      operator: QueryOperator.LESS_THAN_OR_EQUAL,
      value: query,
    });
  }

  static START_WITH(query: string): string {
    return createQueryValue({
      operator: QueryOperator.START_WITH,
      value: query,
    });
  }

  static END_WITH(query: string): string {
    return createQueryValue({
      operator: QueryOperator.END_WITH,
      value: query,
    });
  }

  static CONTAIN(query: string): string {
    return createQueryValue({
      operator: QueryOperator.CONTAIN,
      value: query,
    });
  }

  static IN(query: string[]): string {
    return createQueryValue({
      operator: QueryOperator.IN,
      value: query.join(','),
    });
  }
  static NOT_EQUAL(query: string): string {
    return createQueryValue({
      operator: QueryOperator.NOT_EQUAL,
      value: query,
    });
  }
  static NOT_MORE_THAN(query: string): string {
    return createQueryValue({
      operator: QueryOperator.NOT_MORE_THAN,
      value: query,
    });
  }
  static NOT_LESS_THAN(query: string): string {
    return createQueryValue({
      operator: QueryOperator.NOT_LESS_THAN,
      value: query,
    });
  }
  static NOT_START_WITH(query: string): string {
    return createQueryValue({
      operator: QueryOperator.NOT_START_WITH,
      value: query,
    });
  }
  static NOT_END_WITH(query: string): string {
    return createQueryValue({
      operator: QueryOperator.NOT_END_WITH,
      value: query,
    });
  }
  static NOT_CONTAIN(query: string): string {
    return createQueryValue({
      operator: QueryOperator.NOT_CONTAIN,
      value: query,
    });
  }
  static NOT_IN(query: string[]): string {
    return createQueryValue({
      operator: QueryOperator.NOT_IN,
      value: query.join(','),
    });
  }
}

export type QueryInput = {
  property: string;
  operator: string;
  value: string;
  and?: QueryInput;
  or?: QueryInput;
};

export function createQueryValue(
  query: Pick<QueryInput, 'operator' | 'value'>
) {
  return `${query.operator}:${query.value}`;
}

export function createQuery(query: QueryInput) {
  return `${query.property}=${createQueryValue(query)}`;
}

export function parseQueryInput(
  queryInput: string
): Omit<QueryInput, 'property'> | undefined {
  if (typeof queryInput === 'string') {
    const [operator, ...preValue] = queryInput.split(':');
    const value = preValue.join(':');
    if (operator && value) {
      if (OperatorList.includes(operator)) {
        return {
          operator,
          value,
        };
      }
    }
  }

  return undefined;
}
