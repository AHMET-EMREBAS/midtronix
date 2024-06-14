import { applyDecorators } from '@nestjs/common';
import { ViewColumn as __ViewColumn } from 'typeorm';
import { ApiPropertyOptions, Property } from '../property';
import { ApiOperationOptions, ApiProperty } from '@nestjs/swagger';

export function ViewColumn(options?: ApiPropertyOptions) {
  return applyDecorators(
    Property({ type: 'string', ...options }),
    __ViewColumn()
  );
}

export function ViewNumberColumn(options?: ApiOperationOptions) {
  return applyDecorators(
    Property({ type: 'number', ...options }),
    __ViewColumn()
  );
}

export function ViewBooleanColumn(options?: ApiOperationOptions) {
  return applyDecorators(
    Property({ type: 'boolean', ...options }),
    __ViewColumn({
      transformer: {
        from(value) {
          return value;
        },
        to(value) {
          return value;
        },
      },
    })
  );
}

export function ViewJSONColumn(options?: ApiOperationOptions) {
  return applyDecorators(
    ApiProperty({ type: 'object', ...options }),
    __ViewColumn({
      transformer: {
        from(value) {
          return value ? JSON.parse(value) : value;
        },

        to(value) {
          return value;
        },
      },
    })
  );
}
