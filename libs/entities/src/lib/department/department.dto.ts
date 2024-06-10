import { ICreateDepartmentDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateDepartmentDto
  extends BaseCreateDto<CreateDepartmentDto>
  implements ICreateDepartmentDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateDepartmentDto extends PartialType(CreateDepartmentDto) {}
