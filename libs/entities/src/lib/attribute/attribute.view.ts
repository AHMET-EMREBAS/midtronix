import { BaseView, ViewColumn, ViewEntity, ViewNumberColumn } from '@mdtx/core';
import { IAttributeView } from '@mdtx/models';

import { Attribute } from './attribute.entity';
import { Sku } from '../sku';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'eid')
      .addSelect('main.key', 'key')
      .addSelect('main.value', 'value')
      .addSelect('sku.id', 'skuId')
      .addSelect('sku.sku', 'sku')
      .addSelect('sku.name', 'skuName')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Attribute, 'main')
      .leftJoin(Sku, 'sku', 'sku.id = main.skuId');
  },
})
export class AttributeView extends BaseView implements IAttributeView {
  @ViewNumberColumn() eid!: number;
  @ViewColumn() key!: string;
  @ViewColumn() value!: string;
  @ViewNumberColumn() skuId!: number;
  @ViewColumn() sku!: string;
  @ViewColumn() skuName!: string;
}
