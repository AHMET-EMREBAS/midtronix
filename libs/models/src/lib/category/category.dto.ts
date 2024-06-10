/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys } from '@mdtx/common';
import { ICategory } from './category';

export type CategoryQueryFields = PickKeys<ICategory, keyof ICategory>;

export interface ICreateCategoryDto
  extends Pick<ICategory, 'name' | 'active' | 'notes'> {}

export interface IUpdateCategoryDto extends Partial<ICreateCategoryDto> {}
