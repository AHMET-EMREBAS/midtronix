/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IDescription, IID } from './__base';
import { IManufacturer } from './manufacturer';
import { IImage } from './media';
import { ICategory, IDepartment } from './meta';
import { IStore } from './store';

export interface IPriceLevel extends IDescription {}

export interface IProductCommon extends IDescription {
  upc: string;
}

export interface IProduct<
  TCategory extends IID = IID,
  TDepartment extends IID = IID,
  TManufacturer extends IID = IID
> extends IProductCommon {
  category?: TCategory;
  department?: TDepartment;
  manufacturers?: TManufacturer[];
}

export interface IRecord extends IDescription {}

export interface ISku<TProduct extends IID = IID> extends IProductCommon {
  product: TProduct;
}

export interface IPrice<TSku extends IID = IID, TPriceLevel extends IID = IID>
  extends IBaseEntity {
  price: number;
  cost: number;
  priceLevel: TPriceLevel;
  sku: TSku;
}

export interface IQuantity<TSku extends IID = IID, TStore extends IID = IID>
  extends IBaseEntity {
  quantity: number;
  sku: TSku;
  store: TStore;
}

export interface IProductImage<TOwner extends IID = IID>
  extends IImage<TOwner> {}

export interface IProductVideo<TOwner extends IID = IID>
  extends IImage<TOwner> {}

export type IPriceLevelRaw = IPriceLevel;
export type IProductRaw = IProduct<ICategory, IDepartment, IManufacturer>;
export type ISkuRaw = ISku<IProduct>;
export type IPriceRaw = IPrice<ISku, IPriceLevel>;
export type IQuantityRaw = IQuantity<ISku, IStore>;
export type IProductImageRaw = IProductImage<IProduct>;
export type IProductVideoRaw = IProductVideo<IProduct>;
