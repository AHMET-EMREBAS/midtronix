import { BaseView, ViewColumn, ViewEntity } from '@mdtx/core';
import { ISampleView } from '@mdtx/models';

import { Sample } from './sample.entity';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'sampleId')
      .addSelect('main.name', 'name')
      .addSelect('main.notes', 'notes')
      .addSelect('main.category', 'category')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .addSelect('main.active', 'active')
      .addSelect('main.createdBy', 'createdBy')
      .addSelect('main.updatedBy', 'updatedBy')
      .from(Sample, 'main');
  },
})
export class SampleView extends BaseView implements ISampleView {
  @ViewColumn() name!: string;
  @ViewColumn() category!: string;
  @ViewColumn() sampleId!: string;
}
