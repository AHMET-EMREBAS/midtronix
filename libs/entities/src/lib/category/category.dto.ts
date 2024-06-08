import { ICreateCategoryDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateCategoryDto
  extends BaseCreateDto<CreateCategoryDto>
  implements ICreateCategoryDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateCategoryDto extends PartialType(CreateCategoryDto) {}
