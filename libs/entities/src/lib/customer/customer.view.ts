import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { ICustomerView } from '@mdtx/models';

import { Customer } from './customer.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'customerId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Customer, 'main');
  },
})
export class CustomerView extends BaseView implements ICustomerView {
  @ViewColumn() name!: string;
  @ViewColumn() customerId!: string;
}
