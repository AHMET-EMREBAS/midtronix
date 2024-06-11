import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IEmailView } from '@mdtx/models';

import { Email } from './email.entity';
import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'emailId')
      .addSelect('user.id', 'userId')
      .addSelect('main.email', 'email')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Email, 'main')
      .leftJoin(User, 'user', 'user.id = main.userId');
  },
})
export class EmailView extends BaseView implements IEmailView {
  @ViewColumn() email!: string;
  @ViewColumn() emailId!: string;
  @ViewColumn() userId!: string;
}
