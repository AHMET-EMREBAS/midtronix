/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseEntity } from './__base';
import { ICategory, IDepartment } from './meta';

export interface ICreateDepartmentDto
  extends Omit<IDepartment, keyof IBaseEntity> {}

export interface ICreateCategoryDto
  extends Omit<ICategory, keyof IBaseEntity> {}
