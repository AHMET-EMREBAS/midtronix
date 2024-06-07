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
import { Sample } from './sample.entity';
import { FindOperator } from 'typeorm';

import { SampleMetadataInstance } from './sample.metata';

@Exclude()
export class SampleWhereQueryDto extends BaseWhereQueryDto<Sample> {
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class SampleQueryDto extends BasePaginatorQueryDto {
  @SearchProperty<Sample>(['name'])
  search!: SampleWhereQueryDto;

  @WhereProperty(SampleWhereQueryDto)
  where!: SampleWhereQueryDto;

  @OrderProperty<Sample>(SampleMetadataInstance.fields())
  order: any;
}
