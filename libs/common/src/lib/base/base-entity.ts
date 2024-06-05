import { StringifyType } from '../types';

export interface IID {
  id: number;
}

export interface ITimestamp {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface IEntityMonitor {
  createdBy: number;
  updatedBy: number;
}

export interface IBaseEntity extends IID, ITimestamp, IEntityMonitor {
  active: boolean;
}

export type IBaseView = StringifyType<IBaseEntity>;
