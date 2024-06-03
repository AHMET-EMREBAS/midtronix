import { ViewColumn } from 'typeorm';

export class BaseView {
  @ViewColumn() id!: string;
  @ViewColumn() createdAt!: string;
  @ViewColumn() updatedAt!: string;
  @ViewColumn() deletedAt!: string;
  @ViewColumn() active?: string;
  @ViewColumn() createdBy?: string;
}
