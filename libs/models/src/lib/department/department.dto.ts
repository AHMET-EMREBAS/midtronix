/* eslint-disable @typescript-eslint/no-empty-interface */
import { PickKeys, OmitForCreateDto } from '@mdtx/common';
import { IDepartment } from './department';

export type DepartmentQueryFields = PickKeys<IDepartment, keyof IDepartment>;

export interface ICreateDepartmentDto extends OmitForCreateDto<IDepartment> {}

export interface IUpdateDepartmentDto extends Partial<ICreateDepartmentDto> {}
