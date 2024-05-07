/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IDescription } from './__base';
import { IImage } from './media';

export interface IPriceLevel extends IDescription {}

export interface IProductCommon extends IDescription {
  upc: string;
}

export interface IProduct<TManufacturer> extends IProductCommon {
  manufacturers?: TManufacturer[];
}

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

export interface IProductImage<TOwner> extends IImage<TOwner> {}

export interface IProductVideo<TOwner> extends IImage<TOwner> {}
