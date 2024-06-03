import { Keys, StrProperty } from './types';

export interface IID {
  id: number;
}

export type IIDString = StrProperty<IID>;

export type IDKeys = Keys<IID, 'id'>;
