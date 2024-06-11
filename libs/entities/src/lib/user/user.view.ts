import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IUserView } from '@mdtx/models';

import { User } from './user.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'userId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(User, 'main');
  },
})
export class UserView extends BaseView implements IUserView {
  @ViewColumn() name!: string;
  @ViewColumn() userId!: string;
}
