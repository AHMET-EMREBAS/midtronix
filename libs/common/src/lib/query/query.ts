export enum QueryOprator {
  EQUAL = 'eq',
  MORE_THAN = 'mt',
  LESS_THAN = 'lt',
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

export type QueryInput = {
  property: string;
  operator: string;
  value: string;
};

export function createQuery(query: QueryInput) {
  return `${query.property}=${query.operator}:${query.value}`;
}

export function parseQueryInput(
  queryInput: string
): Omit<QueryInput, 'property'> | undefined {
  const [operator, value] = queryInput.split(':');

  if (operator && value)
    return {
      operator,
      value,
    };

  return undefined;
}
