import { ICreatePermissionDto } from '@mdtx/models';
import { BaseCreateDto, Property, createPermissionString } from '@mdtx/core';
import { Exclude, Transform } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';
import { ResourceActionList, ResourceNames } from '@mdtx/common';

@Exclude()
export class CreatePermissionDto
  extends BaseCreateDto<CreatePermissionDto>
  implements ICreatePermissionDto
{
  @Property({ type: 'string', required: true, enum: [...ResourceNames] })
  resourceName!: string;
  
  @Property({ type: 'string', required: true, enum: [...ResourceActionList] })
  actionName!: string;

  @Property({ type: 'string', format: 'name', required: false })
  @Transform(({ obj }) => {
    return createPermissionString(obj.action, obj.resourceName);
  })
  name!: string;
}

@Exclude()
export class UdpatePermissionDto extends PartialType(CreatePermissionDto) {}
