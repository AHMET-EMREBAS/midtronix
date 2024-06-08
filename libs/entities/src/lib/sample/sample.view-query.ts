/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BasePaginatorQueryDto,
  SearchProperty,
  QueryOperatorProperty,
  BaseWhereQueryDto,
  OrderProperty,
  WhereProperty,
} from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { FindOperator } from 'typeorm';

import { ISampleView } from '@mdtx/models';
import { SampleView } from './sample.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { SampleMetadataInstance } from './sample.metata';

@Exclude()
export class SampleViewWhereQueryDto
  extends BaseWhereQueryDto<SampleView>
  implements
    AllPropertyType<Omit<ISampleView, keyof IBaseEntity>, FindOperator<string>>
{
  @QueryOperatorProperty({ type: 'string' })
  sampleId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  category!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class SampleViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'sampleId'])
  search!: SampleViewWhereQueryDto;

  @WhereProperty(SampleViewWhereQueryDto)
  where!: SampleViewWhereQueryDto;

  @OrderProperty(SampleMetadataInstance.propertyNames())
  order: any;
}
