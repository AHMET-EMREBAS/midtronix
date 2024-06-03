import {
  CreateSelectQuery,
  Exclude,
  Property,
  QueryProperty,
  CreateSearchDto,
  CreateSortDto,
} from '@mdtx/core';
import { IQuerySkuViewDto, SKU_VIEW_PROPERTIES, IProduct } from '@mdtx/common';

@Exclude()
export class QueryProductDto
  implements Pick<IProduct, 'upc' | 'name' | 'description'>
{
  name!: string;
  upc!: string;
  description!: string;
}

@Exclude()
export class SearchProductDto extends CreateSearchDto([
  'name',
  'upc',
  'description',
  'category',
  'department',
]) {}

export class SortProductDto extends CreateSortDto([
  'id',
  'name',
  'upc',
  'category',
  'department',
  'description',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}

@Exclude()
export class QuerySkuViewDto implements IQuerySkuViewDto {
  @Property({
    type: 'string',
    maxLength: 10,
    minLength: 1,
  })
  id!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  quantityId!: number;
  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  skuId!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  storeId!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  productId!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  priceLevelId!: number;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  priceId!: number;

  @QueryProperty() taxrate!: number;
  @QueryProperty() quantity!: number;
  @QueryProperty() price!: number;
  @QueryProperty() cost!: number;
  @QueryProperty() barcode!: string;
  @QueryProperty() name!: string;
  @QueryProperty() description!: string;
  @QueryProperty() priceLevelName!: string;
  @QueryProperty() storeName!: string;
  @QueryProperty() category!: string;
  @QueryProperty() department!: string;
  @QueryProperty() productUpc!: string;
}

@Exclude()
export class SelectSkuViewDto extends CreateSelectQuery(SKU_VIEW_PROPERTIES) {}

@Exclude()
export class SearchSkuViewDto extends CreateSearchDto(SKU_VIEW_PROPERTIES) {}
