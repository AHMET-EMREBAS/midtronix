/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseGeneralQuery,
  SearchProperty,
  QueryOperatorProperty,
  BaseWhereQuery,
  OrderProperty,
  WhereProperty,
} from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { Sample } from './sample.entity';
import { FindOperator } from 'typeorm';
import { AllPropertyType, IBaseQueryDto } from '@mdtx/common';
import { SampleMetadata } from '@mdtx/models';

@Exclude()
export class WhereSampleQuery
  extends BaseWhereQuery<Sample>
  implements Omit<AllPropertyType<Sample, FindOperator<any>>, 'id'>
{
  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class QuerySample
  extends BaseGeneralQuery
  implements IBaseQueryDto<WhereSampleQuery, WhereSampleQuery>
{
  @SearchProperty<Sample>(['name'])
  search!: WhereSampleQuery;

  @WhereProperty(WhereSampleQuery)
  where!: WhereSampleQuery;

  @OrderProperty<Sample>(SampleMetadata.fields())
  order: any;
}
