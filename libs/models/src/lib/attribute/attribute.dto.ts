/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IAttribute } from './attribute';

export type AttributeQueryFields = PickKeys<IAttribute, keyof IAttribute>;

export interface ICreateAttributeDto extends OmitForCreateDto<IAttribute> {}

export interface IUpdateAttributeDto extends Partial<ICreateAttributeDto> {}
