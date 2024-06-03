import { Keys, StrProperty } from './types';

export interface ITimestamp {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type ITimestampString = StrProperty<ITimestamp>;

export type TimestampKeys = Keys<
  ITimestamp,
  'createdAt' | 'updatedAt' | 'deletedAt'
>;
