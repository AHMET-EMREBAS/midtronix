import { ICreatePermissionDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreatePermissionDto
  extends BaseCreateDto<CreatePermissionDto>
  implements ICreatePermissionDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpatePermissionDto extends PartialType(CreatePermissionDto) {}
