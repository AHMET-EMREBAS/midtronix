import { BaseView } from '@mdtx/core';
import { ISampleView } from '@mdtx/models';
import { ViewColumn, ViewEntity } from 'typeorm';
import { Sample } from './sample';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .addSelect('main.id', 'sampleId')
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
}
