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

import { ISupplierView } from '@mdtx/models';
import { SupplierView } from './supplier.view';
import { AllPropertyType, IBaseEntity } from '@mdtx/common';
import { SupplierMetadataInstance } from './supplier.metata';

@Exclude()
export class SupplierViewWhereQueryDto
  extends BaseWhereQueryDto<SupplierView>
  implements
    AllPropertyType<
      Omit<ISupplierView, keyof IBaseEntity>,
      FindOperator<string>
    >
{
  @QueryOperatorProperty({ type: 'string' })
  supplierId!: FindOperator<string>;

  @QueryOperatorProperty({ type: 'string' })
  name!: FindOperator<string>;
}

@Exclude()
export class SupplierViewQueryDto extends BasePaginatorQueryDto {
  @SearchProperty(['name', 'supplierId'])
  search!: SupplierViewWhereQueryDto;

  @WhereProperty(SupplierViewWhereQueryDto)
  where!: SupplierViewWhereQueryDto;

  @OrderProperty(SupplierMetadataInstance.propertyNames())
  order: any;
}
