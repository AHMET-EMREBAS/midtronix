import { ViewEntity, ViewColumn } from '@mdtx/core';
import { Cart } from './cart';
import { ICartView } from '@mdtx/common';

/**
 * @param id
 * @param storeId
 * @param customerId
 * @param userId
 */
@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('main.storeId', 'storeId')
      .addSelect('main.customerId', 'customerId')
      .addSelect('main.employeeId', 'employeeId')
      .from(Cart, 'main');
  },
})
export class CartView implements ICartView {
  @ViewColumn() id!: number;
  @ViewColumn() storeId!: number;
  @ViewColumn() customerId!: number;
  @ViewColumn() employeeId!: number;
}
