import { IID } from './id';
import { ITimestamp } from './timestamp';
import { __StringType } from './types';

export interface IBaseEntity extends IID, ITimestamp {}

export type IBaseEntityString = __StringType<IBaseEntity>;
