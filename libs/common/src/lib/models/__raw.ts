/* eslint-disable @typescript-eslint/no-empty-interface */
import { IManufacturer } from './manufacturer';
import { ISku } from './product';
import { IPurchase } from './purchase';
import { IUser } from './user';

export interface IPurchaseRaw extends IPurchase<ISku, IManufacturer, IUser> {}
