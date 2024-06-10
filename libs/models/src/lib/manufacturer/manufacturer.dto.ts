/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IManufacturer } from './manufacturer';

export type ManufacturerQueryFields = PickKeys<
  IManufacturer,
  keyof IManufacturer
>;

export interface ICreateManufacturerDto
  extends OmitForCreateDto<IManufacturer> {}

export interface IUpdateManufacturerDto
  extends Partial<ICreateManufacturerDto> {}
