/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import {
  IPrice,
  IPriceLevel,
  IProduct,
  IProductImage,
  IProductVideo,
  IQuantity,
  ISku,
} from './product';

export interface ICreateProductDto
  extends Omit<IProduct<IID, IID, IID>, keyof IBaseEntity> {}

export interface ICreatePriceLevelDto
  extends Omit<IPriceLevel, keyof IBaseEntity> {
  taxrate: number;
}

export interface ICreateSkuDto extends Omit<ISku<IID>, keyof IBaseEntity> {}

export interface ICreatePriceDto
  extends Omit<IPrice<IID, IID>, keyof IBaseEntity> {}

export interface ICreateQuantityDto
  extends Omit<IQuantity<IID, IID>, keyof IBaseEntity> {}

export interface ICreateProductImageDto
  extends Omit<IProductImage<IID>, keyof IBaseEntity> {}

export interface ICreateProductVideoDto
  extends Omit<IProductVideo<IID>, keyof IBaseEntity> {}
