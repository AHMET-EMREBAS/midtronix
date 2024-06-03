/* eslint-disable @typescript-eslint/no-explicit-any */
import { Type, ViewColumn, ViewEntity } from '@mdtx/core';
import { Price, PriceLevel, Product, Quantity, Sku } from './product';
import { Store } from './store';
import { IPriceView, IQuantityView, ISkuView } from '@mdtx/common';
import { Category, Department } from './meta';
import { Manufacturer } from './manufacturer';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('main.name', 'name')
      .addSelect('main.description', 'description')
      .addSelect('main.upc', 'upc')
      .addSelect('c.name', 'category')
      .addSelect('d.name', 'department')
      .addSelect('c.id', 'categoryId')
      .addSelect('d.id', 'departmentId')
      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')
      .from(Product, 'main')
      .leftJoin(Category, 'c', 'c.id = main.categoryId')
      .leftJoin(Department, 'd', 'd.id = main.departmentId');
  },
})
export class ProductView {
  @ViewColumn() id!: string;
  @ViewColumn() name!: string;
  @ViewColumn() description!: string;
  @ViewColumn() upc!: string;
  @ViewColumn() category!: string;
  @ViewColumn() department!: string;
  @ViewColumn() categoryId!: string;
  @ViewColumn() departmentId!: string;
  @ViewColumn() createdAt!: string;
  @ViewColumn() updatedAt!: string;
  @ViewColumn() deletedAt!: string;
}

/**
 * @param id
 * @param name
 * @param barcode
 * @param quantity
 * @param storeName
 * @param skuId
 * @param storeId
 */
@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'quantityId')
      .addSelect('sku.name', 'name')
      .addSelect('main.quantity', 'quantity')
      .addSelect('sku.upc', 'barcode')
      .addSelect('sku.id', 'skuId')
      .addSelect('store.id', 'storeId')
      .addSelect('store.name', 'storeName')
      .from(Quantity, 'main')
      .leftJoin(Store, 'store', 'store.id = main.storeId')
      .leftJoin(Sku, 'sku', 'sku.id = main.skuId');
  },
})
export class QuantityView implements IQuantityView {
  @ViewColumn() id!: number;
  @ViewColumn() quantityId!: number;
  @ViewColumn() name!: string;
  @ViewColumn() quantity!: number;
  @ViewColumn() barcode!: string;
  @ViewColumn() skuId!: number;
  @ViewColumn() storeId!: number;
  @ViewColumn() storeName!: string;
}

/**
 * @param id
 * @param name
 * @param barcode
 * @param quantity
 * @param skuId
 * @param priceLevelId
 * @param priceLevelName
 */
@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('sku.name', 'name')
      .addSelect('sku.upc', 'barcode')
      .addSelect('main.price', 'price')
      .addSelect('main.cost', 'cost')
      .addSelect('sku.id', 'skuId')
      .addSelect('main.priceLevelId', 'priceLevelId')
      .addSelect('pl.taxrate', 'taxrate')
      .addSelect('pl.name', 'priceLevelName')
      .from(Price, 'main')
      .leftJoin(PriceLevel, 'pl', 'pl.id = main.priceLevelId')
      .leftJoin(Sku, 'sku', 'sku.id = main.skuId');
  },
})
export class PriceView implements IPriceView {
  @ViewColumn() id!: number;
  @ViewColumn() name!: string;
  @ViewColumn() skuId!: number;
  @ViewColumn() price!: number;
  @ViewColumn() cost!: number;
  @ViewColumn() taxrate!: number;
  @ViewColumn() barcode!: string;
  @ViewColumn() priceLevelId!: number;
  @ViewColumn() priceLevelName!: string;
}

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('ROW_NUMBER() OVER ()', 'id')
      .addSelect('main.id', 'skuId')
      .addSelect('main.upc', 'barcode')
      .addSelect('main.name', 'name')
      .addSelect('main.description', 'description')
      .addSelect('priceView.id', 'priceId')
      .addSelect('priceView.price', 'price')
      .addSelect('priceView.cost', 'cost')
      .addSelect('priceView.taxrate', 'taxrate')
      .addSelect('priceView.priceLevelId', 'priceLevelId')
      .addSelect('priceView.priceLevelName', 'priceLevelName')
      .addSelect('quantityView.storeId', 'storeId')
      .addSelect('quantityView.quantityId', 'quantityId')
      .addSelect('quantityView.quantity', 'quantity')
      .addSelect('quantityView.storeName', 'storeName')
      .addSelect('productView.category', 'category')
      .addSelect('productView.department', 'department')
      .addSelect('productView.id', 'productId')
      .addSelect('productView.upc', 'productUpc')

      .addSelect('main.createdAt', 'createdAt')
      .addSelect('main.updatedAt', 'updatedAt')
      .addSelect('main.deletedAt', 'deletedAt')

      .from(Sku, 'main')
      .leftJoin(ProductView, 'productView', 'productView.id = main.productId')
      .leftJoin(PriceView, 'priceView', 'priceView.skuId = main.id')
      .leftJoin(QuantityView, 'quantityView', 'quantityView.skuId = main.id');
  },
})
export class SkuView implements ISkuView {
  @ViewColumn() quantityId!: string;
  @ViewColumn() id!: string;
  @ViewColumn() skuId!: string;
  @ViewColumn() barcode!: string;
  @ViewColumn() name!: string;
  @ViewColumn() description!: string;
  @ViewColumn() price!: string;
  @ViewColumn() cost!: string;
  @ViewColumn() taxrate!: string;
  @ViewColumn() priceId!: string;
  @ViewColumn() priceLevelId!: string;
  @ViewColumn() priceLevelName!: string;
  @ViewColumn() storeId!: string;
  @ViewColumn() quantity!: string;
  @ViewColumn() storeName!: string;
  @ViewColumn() category!: string;
  @ViewColumn() department!: string;
  @ViewColumn() productId!: string;
  @ViewColumn() productUpc!: string;
  @ViewColumn() createdAt!: string;
  @ViewColumn() updatedAt!: string;
  @ViewColumn() deletedAt!: string;
}

export const SkuViewEntities: Readonly<Type<any>[]> = [
  ProductView,
  SkuView,
  PriceView,
  QuantityView,
  Product,
  Sku,
  Price,
  Quantity,
  PriceLevel,
  Category,
  Department,
  Manufacturer,
  Store,
];
