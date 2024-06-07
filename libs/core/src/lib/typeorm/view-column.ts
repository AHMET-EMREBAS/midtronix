import { applyDecorators } from '@nestjs/common';
import { ViewColumn as __ViewColumn } from 'typeorm';
import { ApiPropertyOptions, Property } from '../property';

export function ViewColumn(options?: ApiPropertyOptions) {
  return applyDecorators(
    Property({ type: 'string', ...options }),
    __ViewColumn()
  );
}
