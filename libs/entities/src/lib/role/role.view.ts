import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IRoleView } from '@mdtx/models';

import { Role } from './role.entity';
import { Permission } from '../permission';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'roleId')
      .addSelect('main.name', 'name')
      .addSelect('permission.name', 'permission')
      .addSelect('pp.permissionId', 'permissionId')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Role, 'main')
      .leftJoin('role_permissions_permission', 'pp', 'pp.roleId = main.id')
      .leftJoin(Permission, 'permission', 'permission.id = pp.permissionId');
  },
})
export class RoleView extends BaseView implements IRoleView {
  @ViewColumn() name!: string;
  @ViewColumn() roleId!: string;
  @ViewColumn() permission!: string;
  @ViewColumn() permissionId!: string;
}
