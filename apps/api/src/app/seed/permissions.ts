import {
  ResourceActionList,
  ResourceActions,
  ResourceNames,
} from '@mdtx/common';
import { createPermissionString } from '@mdtx/core';
import { Permission } from '@mdtx/entities';
import { IPermission } from '@mdtx/models';
import { Repository } from 'typeorm';

function createPermissions(): IPermission[] {
  return ResourceNames.map((r) => {
    return ResourceActionList.map((a) => {
      return {
        actionName: a,
        resourceName: r,
        name: createPermissionString(a as ResourceActions, r),
      };
    });
  }).flat() as IPermission[];
}
// permissionService

export const Permissions = createPermissions();
