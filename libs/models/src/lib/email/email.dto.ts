/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IEmail } from './email';

export type EmailQueryFields = PickKeys<IEmail, keyof IEmail>;

export interface ICreateEmailDto extends OmitForCreateDto<IEmail> {}

export interface IUpdateEmailDto extends Partial<ICreateEmailDto> {}
