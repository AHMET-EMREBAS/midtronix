import { ResourceActionList, ResourceNames } from '@mdtx/common';
import { Property, createPermissionString } from '@mdtx/core';
import { Exclude, Transform } from 'class-transformer';

@Exclude()
export class HasPermissionDto {
  @Property({ type: 'string', required: true, enum: ResourceNames })
  resourceName!: string;

  @Property({ type: 'string', required: true, enum: ResourceActionList })
  action!: string;

  @Property({ type: 'string' })
  @Transform(({ obj }) => createPermissionString(obj.action, obj.resourceName))
  permission!: string;
}
