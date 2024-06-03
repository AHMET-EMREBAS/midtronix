import {
  CreateSelectQuery,
  Exclude,
  Property,
  QueryProperty,
  CreateSearchDto,
  CreateSortDto,
} from '@mdtx/core';
import {
  IQuerySkuViewDto,
  SKU_VIEW_PROPERTIES,
  IProduct,
  ISkuView,
} from '@mdtx/common';

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

@Exclude()
export class SortProductDto extends CreateSortDto<IProduct>([
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
export class SortSkuViewDto extends CreateSortDto<ISkuView>([
  'id',
  'name',
  'barcode',
  'priceLevelName',
  'storeName',
  'category',
  'department',
  'description',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}

@Exclude()
export class SearchSkuViewDto extends CreateSearchDto([
  'id',
  'name',
  'barcode',
  'priceLevelName',
  'storeName',
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
  id!: string;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  quantityId!: string;
  
  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  skuId!: string;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  storeId!: string;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  productId!: string;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  priceLevelId!: string;

  @Property({ type: 'string', maxLength: 10, minLength: 1 })
  priceId!: string;

  @QueryProperty() taxrate!: string;
  @QueryProperty() quantity!: string;
  @QueryProperty() price!: string;
  @QueryProperty() cost!: string;
  @QueryProperty() barcode!: string;
  @QueryProperty() name!: string;
  @QueryProperty() description!: string;
  @QueryProperty() priceLevelName!: string;
  @QueryProperty() storeName!: string;
  @QueryProperty() category!: string;
  @QueryProperty() department!: string;
  @QueryProperty() productUpc!: string;
  @QueryProperty() createdAt!: string;
  @QueryProperty() updatedAt!: string;
  @QueryProperty() deletedAt!: string;
}

@Exclude()
export class SelectSkuViewDto extends CreateSelectQuery(SKU_VIEW_PROPERTIES) {}
