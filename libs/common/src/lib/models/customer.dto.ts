/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IID } from './__base';
import {
  ICustomer,
  ICustomerAccount,
  ICustomerAddress,
  ICustomerEmail,
  ICustomerImage,
  ICustomerPermission,
  ICustomerPhone,
  ICustomerRole,
} from './customer';

export interface ICreateCustomerDto
  extends Omit<ICustomer<IID, IID>, keyof IBaseEntity> {}

export interface ICreateCustomerPermissionDto
  extends Omit<ICustomerPermission, keyof IBaseEntity> {}

export interface ICreateCustomerRoleDto
  extends Omit<ICustomerRole<IID>, keyof IBaseEntity> {}

export interface ICreateCustomerImageDto
  extends Omit<ICustomerImage<IID>, keyof IBaseEntity> {}

export interface ICreateCustomerAddressDto
  extends Omit<ICustomerAddress<IID>, keyof IBaseEntity> {}

export interface ICreateCustomerEmailDto
  extends Omit<ICustomerEmail<IID>, keyof IBaseEntity> {}

export interface ICreateCustomerPhoneDto
  extends Omit<ICustomerPhone<IID>, keyof IBaseEntity> {}

export interface ICreateCustomerAccountDto
  extends Omit<ICustomerAccount, keyof IBaseEntity> {}




  
