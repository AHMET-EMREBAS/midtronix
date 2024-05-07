/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IDescription } from './__base';

export interface IStore extends IDescription {}

export interface IPriceLevel extends IDescription {}

export interface IProductCommon extends IDescription {
  upc: string;
}

export interface IProduct extends IProductCommon {}

export interface IRecord extends IDescription {}

export interface ISku<TProduct, IRecord> extends IProductCommon {
  product: TProduct;
  details?: IRecord[];
}

export interface IPrice<TSku, TPriceLevel> extends IBaseEntity {
  price: number;
  cost: number;
  priceLevel: TPriceLevel;
  sku: TSku;
}

export interface IQuantity<TSku, TStore> extends IBaseEntity {
  quantity: number;
  sku: TSku;
  store: TStore;
}


