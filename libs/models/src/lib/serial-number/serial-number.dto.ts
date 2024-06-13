/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { ISerialNumber } from './serial-number';

export type SerialNumberQueryFields = PickKeys<
  ISerialNumber,
  keyof ISerialNumber
>;

export interface ICreateSerialNumberDto
  extends OmitForCreateDto<ISerialNumber> {}

export interface IUpdateSerialNumberDto
  extends Partial<ICreateSerialNumberDto> {}
