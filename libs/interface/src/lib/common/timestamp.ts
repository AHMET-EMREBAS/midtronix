import { __StringType } from './types';

export interface ITimestamp {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type ITimestampString = __StringType<ITimestamp>;
