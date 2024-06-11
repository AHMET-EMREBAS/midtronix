/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { ICustomer } from './customer';

export type CustomerQueryFields = PickKeys<ICustomer, keyof ICustomer>;

export interface ICreateCustomerDto extends OmitForCreateDto<ICustomer> {}

export interface IUpdateCustomerDto extends Partial<ICreateCustomerDto> {}
