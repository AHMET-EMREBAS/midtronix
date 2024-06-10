import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { IManufacturerView } from '@mdtx/models';

import { Manufacturer } from './manufacturer.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'manufacturerId')
      .addSelect('main.name', 'name')
      .addSelect('main.description', 'description')
      .addSelect('main.notes', 'notes')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Manufacturer, 'main');
  },
})
export class ManufacturerView extends BaseView implements IManufacturerView {
  @ViewColumn() name!: string;
  @ViewColumn() manufacturerId!: string;
  @ViewColumn() description!: string;
}
