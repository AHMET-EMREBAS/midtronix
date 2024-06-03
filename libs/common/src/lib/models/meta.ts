/* eslint-disable @typescript-eslint/no-empty-interface */
import { IName } from './__base';

export interface ICategory extends IName {}

export interface IDepartment extends IName {}

export type ICategoryRaw = ICategory;

export type IDepartmentRaw = IDepartment;
