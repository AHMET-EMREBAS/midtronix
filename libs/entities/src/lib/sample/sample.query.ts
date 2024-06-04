/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Property,
  BaseGeneralQuery,
  SearchProperty,
  QueryOperatorProperty,
  BaseWhereQuery,
  OrderProperty,
} from '@mdtx/core';
import { Exclude } from 'class-transformer';
import { Sample } from './sample.entity';
import { FindOperator } from 'typeorm';
import { AllPropertyType, IBaseQueryDto } from '@mdtx/common';
import { SampleMetadata } from '@mdtx/models';

@Exclude()
export class __WhereSampleQuery
  extends BaseWhereQuery<Sample>
  implements Omit<AllPropertyType<Sample, FindOperator<any>>, 'id'>
{
  @QueryOperatorProperty()
  name!: FindOperator<string>;
}

@Exclude()
export class QuerySample
  extends BaseGeneralQuery
  implements IBaseQueryDto<__WhereSampleQuery, __WhereSampleQuery>
{
  @SearchProperty<Sample>(SampleMetadata.fields())
  search!: __WhereSampleQuery;

  @Property({ type: 'object', target: __WhereSampleQuery })
  where!: __WhereSampleQuery;

  @OrderProperty<Sample>(SampleMetadata.fields())
  order: any;
}
