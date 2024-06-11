import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IRoleView } from '@mdtx/models';

import { Role } from './role.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'roleId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Role, 'main');
  },
})
export class RoleView extends BaseView implements IRoleView {
  @ViewColumn() name!: string;
  @ViewColumn() roleId!: string;
}
