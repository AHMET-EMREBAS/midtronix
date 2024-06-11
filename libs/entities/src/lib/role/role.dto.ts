import { ICreateRoleDto, IPermission } from '@mdtx/models';
import { BaseCreateDto, IDDto, Property } from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';

@Exclude()
export class CreateRoleDto
  extends BaseCreateDto<CreateRoleDto>
  implements ICreateRoleDto
{
  @Property({ type: 'string', format: 'name', required: true })
  name!: string;

  @Property({ type: 'object', target: IDDto, isArray: true })
  permissions!: IPermission[];
}

@Exclude()
export class UdpateRoleDto extends PartialType(CreateRoleDto) {}
