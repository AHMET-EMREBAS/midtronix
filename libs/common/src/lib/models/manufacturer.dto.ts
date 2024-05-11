/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import {
  IManufacturer,
  IManufacturerAddress,
  IManufacturerEmail,
  IManufacturerPhone,
} from './manufacturer';

export interface ICreateManufacturerDto
  extends Omit<IManufacturer, keyof IBaseEntity> {}

export interface ICreateManufacturerAddress
  extends Omit<IManufacturerAddress<IID>, keyof IBaseEntity> {}

export interface ICreateManufacturerEmail
  extends Omit<IManufacturerEmail<IID>, keyof IBaseEntity> {}

export interface ICreateManufacturerPhone
  extends Omit<IManufacturerPhone<IID>, keyof IBaseEntity> {}
