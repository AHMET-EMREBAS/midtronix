import { BaseView, ViewColumn, ViewEntity, ViewNumberColumn } from '@mdtx/core';
import { ISerialNumberView, SerialNumberStatus } from '@mdtx/models';

import { SerialNumber } from './serial-number.entity';
import { Product } from '../product';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'eid')
      .addSelect('product.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.productId', 'productId')
      .addSelect('main.status', 'status')
      .addSelect('main.serialNumber', 'serialNumber')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(SerialNumber, 'main')
      .leftJoin(Product, 'product', 'product.id = main.productId');
  },
})
export class SerialNumberView extends BaseView implements ISerialNumberView {
  @ViewNumberColumn() productId!: number;
  @ViewColumn() status!: SerialNumberStatus;
  @ViewColumn() serialNumber!: string;
  @ViewNumberColumn() eid!: number;
  @ViewColumn() name!: string;
}
