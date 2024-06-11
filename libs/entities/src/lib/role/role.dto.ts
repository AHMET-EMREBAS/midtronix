import { ICreateRoleDto } from '@mdtx/models';
import { BaseCreateDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateRoleDto
  extends BaseCreateDto<CreateRoleDto>
  implements ICreateRoleDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;
}

@Exclude()
export class UdpateRoleDto extends PartialType(CreateRoleDto) {}
