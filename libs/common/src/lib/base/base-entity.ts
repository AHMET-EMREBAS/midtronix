import { StringifyType } from '../types';

export interface IID {
  id: number;
}

export interface IBaseEntity extends IID {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  createdBy: number;
  updatedBy: number;
  active: boolean;
}

export type IBaseView = StringifyType<IBaseEntity>;
