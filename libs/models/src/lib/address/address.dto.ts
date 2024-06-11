/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IAddress } from './address';

export type AddressQueryFields = PickKeys<IAddress, keyof IAddress>;

export interface ICreateAddressDto extends OmitForCreateDto<IAddress> {}

export interface IUpdateAddressDto extends Partial<ICreateAddressDto> {}
