import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IBaseEntity, IBaseView } from '@mdtx/common';
import {
  BooleanColumn,
  IntegerColumn,
  StringColumn,
  ViewColumn,
} from '../typeorm';
import { Property } from '../property';

/**
 * ALl entitites extends this class
 */
export class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn()
  @Property({ type: 'number' })
  id!: number;

  @CreateDateColumn()
  @Property({ type: 'date' })
  createdAt!: Date;

  @UpdateDateColumn()
  @Property({ type: 'date' })
  updatedAt!: Date;

  @DeleteDateColumn()
  @Property({ type: 'date' })
  deletedAt!: Date;

  @IntegerColumn()
  @Property({ type: 'number' })
  createdBy!: number;

  @IntegerColumn()
  @Property({ type: 'number' })
  updatedBy!: number;

  @BooleanColumn()
  @Property({ type: 'boolean' })
  active!: boolean;

  @StringColumn()
  @Property({ type: 'string' })
  notes!: string;
}

export class BaseView implements IBaseView {
  @ViewColumn() id!: string;
  @ViewColumn() createdAt!: string;
  @ViewColumn() updatedAt!: string;
  @ViewColumn() deletedAt!: string;
  @ViewColumn() createdBy!: string;
  @ViewColumn() updatedBy!: string;
  @ViewColumn() active!: string;
  @ViewColumn() notes!: string;
}
