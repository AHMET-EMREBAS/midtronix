import { Exclude, Property, QueryProperty } from '@mdtx/core';
import { IQuerySingleSkuViewDto, IQuerySkuViewDto } from '@mdtx/common';

@Exclude()
export class QuerySingleSkuViewDto implements IQuerySingleSkuViewDto {
  @Property({ type: 'string', minLength: 1, maxLength: 10, required: true })
  barcode!: string;

  @Property({ type: 'string', minLength: 1, maxLength: 10, required: true })
  storeId!: number;

  @Property({ type: 'string', minLength: 1, maxLength: 10, required: true })
  priceLevelId!: number;
}

@Exclude()
export class QuerySkuViewDto implements IQuerySkuViewDto {
  @Property({
    type: 'string',
    maxLength: 10,
    minLength: 1,
    description: 'Index (not id)',
  })
  id!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  skuId!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  storeId!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  productId!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  priceLevelId!: number;

  @QueryProperty() quantity!: number;
  @QueryProperty() price!: number;
  @QueryProperty() cost!: number;

  @QueryProperty() barcode!: string;
  @QueryProperty() name!: string;
  @QueryProperty() priceLevelName!: string;
  @QueryProperty() storeName!: string;
  @QueryProperty() category!: string;
  @QueryProperty() department!: string;
  @QueryProperty() productUpc!: string;
}
