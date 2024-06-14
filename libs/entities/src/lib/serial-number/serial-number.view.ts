import { BaseView, ViewColumn, ViewEntity, ViewNumberColumn } from '@mdtx/core';
import { ISerialNumberView, SerialNumberStatus } from '@mdtx/models';

import { SerialNumber } from './serial-number.entity';
import { Sku } from '../sku';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'eid')
      .addSelect('sku.sku', 'sku')
      .addSelect('sku.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.skuId', 'skuId')
      .addSelect('main.status', 'status')
      .addSelect('main.serialNumber', 'serialNumber')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(SerialNumber, 'main')
      .leftJoin(Sku, 'sku', 'sku.id = main.skuId');
  },
})
export class SerialNumberView extends BaseView implements ISerialNumberView {
  @ViewColumn() sku!: string;
  @ViewNumberColumn() skuId!: number;
  @ViewColumn() status!: SerialNumberStatus;
  @ViewColumn() serialNumber!: string;
  @ViewNumberColumn() eid!: number;
  @ViewColumn() name!: string;
}
