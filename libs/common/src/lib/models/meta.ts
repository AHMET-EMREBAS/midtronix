/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity, IName } from './__base';

export interface ICategory extends IName {}

export interface IDepartment extends IName {}

export interface ICreateCategoryDto
  extends Omit<ICategory, keyof IBaseEntity> {}

export interface ICreateDepartmentDto
  extends Omit<IDepartment, keyof IBaseEntity> {}
