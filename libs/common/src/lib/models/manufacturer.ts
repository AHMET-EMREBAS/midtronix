/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IDescription, IID } from './__base';
import { IAddress, IEmail, IPhone } from './contact';

export interface IManufacturer extends IDescription {}

export interface IManufacturerAddress<TManufacturer extends IID>
  extends IAddress<TManufacturer> {}

export interface IManufacturerEmail<TManufacturer extends IID>
  extends IEmail<TManufacturer> {}

export interface IManufacturerPhone<TManufacturer extends IID>
  extends IPhone<TManufacturer> {}

export interface ICreateManufacturerDto
  extends Omit<IManufacturer, keyof IBaseEntity> {}
