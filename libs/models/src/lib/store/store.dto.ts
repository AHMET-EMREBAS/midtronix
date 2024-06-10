/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys } from '@mdtx/common';
import { IStore } from './store';

export type StoreQueryFields = PickKeys<IStore, keyof IStore>;

export interface ICreateStoreDto extends Pick<IStore, 'name' | 'active'> {}

export interface IUpdateStoreDto extends Partial<ICreateStoreDto> {}
