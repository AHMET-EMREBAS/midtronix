import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IAddressView } from '@mdtx/models';

import { Address } from './address.entity';
import { User } from '../user';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'addressId')
      .addSelect('user.id', 'userId')

      .addSelect('main.street', 'street')
      .addSelect('main.city', 'city')
      .addSelect('main.state', 'state')
      .addSelect('main.country', 'country')
      .addSelect('main.zip', 'zip')

      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Address, 'main')
      .leftJoin(User, 'user', 'user.id = main.userId');
  },
})
export class AddressView extends BaseView implements IAddressView {
  @ViewColumn() addressId!: string;
  @ViewColumn() userId!: string;
  @ViewColumn() street!: string;
  @ViewColumn() city!: string;
  @ViewColumn() state!: string;
  @ViewColumn() country!: string;
  @ViewColumn() zip!: string;
}
