import { Column as __Column } from 'typeorm';

export function IntegerColumn() {
  return __Column({
    type: 'int',
    default: 0,
  });
}

export function StringColumn() {
  return __Column({ type: 'varchar', default: 'Not Set' });
}

export function DateColumn() {
  return __Column({
    type: 'date',
    nullable: true,
    default: new Date('1/1/2051 13:01'),
  });
}

export function BooleanColumn() {
  return __Column({ type: 'boolean', default: false });
}

export function UniqueColumn() {
  return __Column({ type: 'varchar', unique: true });
}
