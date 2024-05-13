/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IDescription, IID } from './__base';
import { IImage } from './media';

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

export interface ISku<TProduct extends IID> extends IProductCommon {
  product: TProduct;
}

export interface IPrice<TSku extends IID, TPriceLevel extends IID>
  extends IBaseEntity {
  price: number;
  cost: number;
  priceLevel: TPriceLevel;
  sku: TSku;
}

export interface IQuantity<TSku extends IID, TStore extends IID>
  extends IBaseEntity {
  quantity: number;
  sku: TSku;
  store: TStore;
}

export interface IProductImage<TOwner extends IID> extends IImage<TOwner> {}

export interface IProductVideo<TOwner extends IID> extends IImage<TOwner> {}
