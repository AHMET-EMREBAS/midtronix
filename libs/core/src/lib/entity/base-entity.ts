import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ViewColumn,
} from 'typeorm';
import { IBaseEntity, IBaseView } from '@mdtx/common';
import { BooleanColumn, IntegerColumn } from '../column';

/**
 * ALl entitites extends this class
 */
export class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn() id!: number;
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;

  
  @DeleteDateColumn() deletedAt!: Date;
  @IntegerColumn() createdBy!: number;
  @IntegerColumn() updatedBy!: number;
  @BooleanColumn() active!: boolean;
}

export class BaseView implements IBaseView {
  @ViewColumn() id!: string;
  @ViewColumn() createdAt!: string;
  @ViewColumn() updatedAt!: string;
  @ViewColumn() deletedAt!: string;
  @ViewColumn() createdBy!: string;
  @ViewColumn() updatedBy!: string;
  @ViewColumn() active!: string;
}
