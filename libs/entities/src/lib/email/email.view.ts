import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IEmailView } from '@mdtx/models';

import { Email } from './email.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'emailId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Email, 'main');
  },
})
export class EmailView extends BaseView implements IEmailView {
  @ViewColumn() name!: string;
  @ViewColumn() emailId!: string;
}
