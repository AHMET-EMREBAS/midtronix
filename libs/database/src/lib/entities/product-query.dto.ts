import {
  CreateSelectQuery,
  Exclude,
  Property,
  QueryProperty,
} from '@mdtx/core';
import { IQuerySkuViewDto, SKU_VIEW_PROPERTIES } from '@mdtx/common';

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

@Exclude()
export class SelectSkuViewDto extends CreateSelectQuery(SKU_VIEW_PROPERTIES) {}
