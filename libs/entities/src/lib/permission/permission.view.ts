import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IPermissionView } from '@mdtx/models';

import { Permission } from './permission.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'permissionId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Permission, 'main');
  },
})
export class PermissionView extends BaseView implements IPermissionView {
  @ViewColumn() name!: string;
  @ViewColumn() permissionId!: string;
}
