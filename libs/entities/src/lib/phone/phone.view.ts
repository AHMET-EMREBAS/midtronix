import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IPhoneView } from '@mdtx/models';

import { Phone } from './phone.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'phoneId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Phone, 'main');
  },
})
export class PhoneView extends BaseView implements IPhoneView {
  @ViewColumn() name!: string;
  @ViewColumn() phoneId!: string;
}
