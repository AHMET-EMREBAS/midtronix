/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDescription } from './__base';
import { IAddress, IEmail, IPhone } from './contact';

export interface IManufacturer extends IDescription {}

export interface IManufacturerAddress<TManufacturer>
  extends IAddress<TManufacturer> {}

export interface IManufacturerEmail<TManufacturer>
  extends IEmail<TManufacturer> {}

export interface IManufacturerPhone<TManufacturer>
  extends IPhone<TManufacturer> {}
