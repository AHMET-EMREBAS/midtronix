import { applyDecorators } from '@nestjs/common';
import { Column as __Column } from 'typeorm';
import { ApiPropertyOptions, Property } from '../property';
import { hashSync, genSaltSync } from 'bcrypt';
export type ApiColumnOptions = Partial<ApiPropertyOptions>;

export function IntegerColumn(options?: ApiColumnOptions) {
  return applyDecorators(
    Property({ type: 'integer', ...options }),
    __Column({
      type: 'varchar',
      nullable: true,
    })
  );
}

export function NumberColumn(options?: ApiColumnOptions) {
  return applyDecorators(
    Property({ type: 'number', ...options }),
    __Column({
      type: 'varchar',
      nullable: true,
      transformer: {
        to(value) {
          return value;
        },
        from(value) {
          return value ? parseFloat(value) : value;
        },
      },
    })
  );
}

export function StringColumn(options?: ApiColumnOptions) {
  return applyDecorators(
    Property({ type: 'string', ...options }),
    __Column({ type: 'varchar', default: 'Not Set', nullable: true })
  );
}

export function JSONColumn(options?: ApiColumnOptions) {
  return applyDecorators(
    Property({ type: 'object', ...options }),
    __Column({
      type: 'varchar',
      nullable: true,
      transformer: {
        from(value) {
          return value ? JSON.parse(value) : value;
        },
        to(value) {
          return value ? JSON.stringify(value) : value;
        },
      },
    })
  );
}

export function DateColumn(options?: ApiColumnOptions) {
  return applyDecorators(
    Property({ type: 'date', ...options }),
    __Column({
      type: 'date',
      nullable: true,
      default: new Date('1/1/1950 13:01'),
    })
  );
}

export function BooleanColumn(options?: ApiColumnOptions) {
  return applyDecorators(
    Property({ type: 'boolean', ...options }),
    __Column({ type: 'boolean', default: options?.default, nullable: true })
  );
}

export function UniqueColumn(options?: ApiColumnOptions) {
  return applyDecorators(
    Property({ type: 'string', description: 'Unique test value', ...options }),
    __Column({ type: 'varchar', unique: true, nullable: true })
  );
}

export function HashedColumn(options?: ApiColumnOptions) {
  return applyDecorators(
    Property({ type: 'string', description: 'Hashed column', ...options }),
    __Column({
      type: 'varchar',
      nullable: true,
      transformer: {
        to(value) {
          return hashSync(value, genSaltSync(8));
        },
        from(value) {
          return value;
        },
      },
    })
  );
}
