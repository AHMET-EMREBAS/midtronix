import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IPhoneView } from '@mdtx/models';

import { Phone } from './phone.entity';
import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'phoneId')
      .addSelect('user.id', 'userId')
      .addSelect('main.phone', 'phone')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Phone, 'main')
      .leftJoin(User, 'user', 'user.id = main.userId');
  },
})
export class PhoneView extends BaseView implements IPhoneView {
  @ViewColumn() phone!: string;
  @ViewColumn() phoneId!: string;
  @ViewColumn() userId!: string;
}
