/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDescription, IID } from './__base';
import { IAddress, IEmail, IPhone } from './contact';

export interface IManufacturer extends IDescription {}

export interface IManufacturerAddress<TManufacturer extends IID = IID>
  extends IAddress<TManufacturer> {}

export interface IManufacturerEmail<TManufacturer extends IID = IID>
  extends IEmail<TManufacturer> {}

export interface IManufacturerPhone<TManufacturer extends IID = IID>
  extends IPhone<TManufacturer> {}

export type IManufacturerRaw = IManufacturer;

export type IManufacturerAddressRaw = IManufacturerAddress<IAddress>;
export type IManufacturerEmailRaw = IManufacturerEmail<IEmail>;
export type IManufacturerPhoneRaw = IManufacturerPhone<IPhone>;
