/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity } from './__base';

export interface ITaxrate extends IBaseEntity {
  state: string;
  district: string;
  rate: number;
}

export interface ITaxrateRaw extends ITaxrate {}
