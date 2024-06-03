import { IDKeys, IID } from './id';
import { ITimestamp, TimestampKeys } from './timestamp';
import { Keys, StrProperty } from './types';

export interface IBaseEntity extends IID, ITimestamp {}

export type IBaseEntityString = StrProperty<IBaseEntity>;

export type BaseEntityKeys = Keys<IBaseEntity, IDKeys | TimestampKeys>;
