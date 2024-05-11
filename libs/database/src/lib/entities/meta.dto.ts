import { ICreateCategoryDto, ICreateDepartmentDto } from '@mdtx/common';
import { CreateNameDto } from './__base.dto';
import { Exclude, PartialType } from '@mdtx/core';

@Exclude()
export class CreateCategoryDto
  extends CreateNameDto
  implements ICreateCategoryDto {}

@Exclude()
export class CreateDepartmentDto
  extends CreateNameDto
  implements ICreateDepartmentDto {}

@Exclude()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

@Exclude()
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
