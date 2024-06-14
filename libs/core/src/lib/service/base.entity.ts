import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Attirubutes, IBaseEntity, IBaseView } from '@mdtx/common';
import {
  BooleanColumn,
  IntegerColumn,
  JSONColumn,
  StringColumn,
  ViewBooleanColumn,
  ViewColumn,
  ViewNumberColumn,
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
  createdBy!: number;

  @IntegerColumn()
  updatedBy!: number;

  @BooleanColumn({ default: true })
  active!: boolean;

  @StringColumn()
  notes!: string;

  @JSONColumn()
  attributes: Attirubutes | undefined;
}

export class BaseView implements IBaseView {
  
  @ViewNumberColumn() id!: number;
  @ViewColumn() createdAt!: Date;
  @ViewColumn() updatedAt!: Date;
  @ViewColumn() deletedAt!: Date;
  @ViewNumberColumn() createdBy!: number;
  @ViewNumberColumn() updatedBy!: number;
  @ViewBooleanColumn() active!: boolean;
  @ViewColumn() notes!: string;
}
