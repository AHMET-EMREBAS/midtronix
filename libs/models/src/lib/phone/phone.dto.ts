/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IPhone } from './phone';

export type PhoneQueryFields = PickKeys<IPhone, keyof IPhone>;

export interface ICreatePhoneDto extends OmitForCreateDto<IPhone> {}

export interface IUpdatePhoneDto extends Partial<ICreatePhoneDto> {}
