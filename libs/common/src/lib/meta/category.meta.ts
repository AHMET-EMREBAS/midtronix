/* eslint-disable @typescript-eslint/no-empty-interface */
import { TableColumnOption } from '../table';
import { PartialPick, PickKeys, PropertyType } from '../types/type';
import { IName, INameTableOption } from '../models/__base';

export interface ICategory extends IName {}

export type CreateCategoryFields = PickKeys<ICategory, 'name'>;

export type UpdateCategoryFields = PickKeys<ICategory, 'id' | 'name'>;

export interface ICreateCategoryDto
  extends Pick<ICategory, CreateCategoryFields> {}

export interface IUpdateCategoryDto
  extends PartialPick<ICategory, UpdateCategoryFields> {}

export interface IQueryCategoryDto extends PropertyType<ICategory, string> {}

export type ICategoryRaw = ICategory;

export interface ICategoryView extends PropertyType<ICategory, string> {}

export const CategoryOptions: TableColumnOption<ICategory> = {
  ...INameTableOption,
};
