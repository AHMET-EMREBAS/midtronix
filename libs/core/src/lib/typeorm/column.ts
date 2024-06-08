import { applyDecorators } from '@nestjs/common';
import { Column as __Column } from 'typeorm';
import { ApiPropertyOptions, Property } from '../property';

export function IntegerColumn(options?: ApiPropertyOptions) {
  return applyDecorators(
    Property({ type: 'integer', ...options }),
    __Column({
      type: 'int',
      default: 0,
    })
  );
}

export function StringColumn(options?: ApiPropertyOptions) {
  return applyDecorators(
    Property({ type: 'string', ...options }),
    __Column({ type: 'varchar', default: 'Not Set', nullable: true })
  );
}

export function DateColumn(options?: ApiPropertyOptions) {
  return applyDecorators(
    Property({ type: 'date', ...options }),
    __Column({
      type: 'date',
      nullable: true,
      default: new Date('1/1/1950 13:01'),
    })
  );
}

export function BooleanColumn(options?: ApiPropertyOptions) {
  return applyDecorators(
    Property({ type: 'boolean', ...options }),
    __Column({ type: 'boolean', default: false, nullable: true })
  );
}

export function UniqueColumn(options?: ApiPropertyOptions) {
  return applyDecorators(
    Property({ type: 'string', description: 'Unique test value', ...options }),
    __Column({ type: 'varchar', unique: true })
  );
}
