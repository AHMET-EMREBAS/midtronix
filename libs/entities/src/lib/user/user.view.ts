import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IUserView } from '@mdtx/models';

import { User } from './user.entity';
import { Role } from '../role';
import { Attirubutes } from '@mdtx/common';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'userId')
      .addSelect('main.username', 'username')
      .addSelect('role.name', 'roles')
      .addSelect('main.notes', 'notes')
      
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(User, 'main')
      .leftJoin('user_roles_role', 'ur', 'ur.userId = main.id')
      .leftJoin(Role, 'role', 'role.id = ur.roleId');
  },
})
export class UserView extends BaseView implements IUserView {
  @ViewColumn() userId!: string;
  @ViewColumn() username!: string;
  @ViewColumn() roles!: string;

  @ViewColumn() attributes! : Attirubutes;
}
