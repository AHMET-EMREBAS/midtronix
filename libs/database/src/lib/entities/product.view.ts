/* eslint-disable @typescript-eslint/no-explicit-any */
import { Type, ViewColumn, ViewEntity } from '@mdtx/core';
import {
  Price,
  PriceLevel,
  Product,
  ProductEntities,
  ProductImage,
  ProductVideo,
  Quantity,
  Sku,
} from './product';
import { Store } from './store';
import { IPriceView, IQuantityView, ISkuView } from '@mdtx/common';
import { Category, Department } from './meta';
import { Manufacturer } from './manufacturer';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('m.id', 'id')
      .addSelect('m.name', 'name')
      .addSelect('m.description', 'description')
      .addSelect('m.upc', 'upc')
      .addSelect('c.name', 'category')
      .addSelect('d.name', 'department')

      .from(Product, 'm')
      .leftJoin(Category, 'c', 'c.id = m.categoryId')
      .leftJoin(Department, 'd', 'd.id = m.departmentId');
  },
})
export class ProductView {
  @ViewColumn() id: any;
  @ViewColumn() name: any;
  @ViewColumn() description: any;
  @ViewColumn() upc: any;
  @ViewColumn() category: any;
  @ViewColumn() department: any;
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
      .select('m.id', 'id')
      .addSelect('sku.name', 'name')
      .addSelect('m.quantity', 'quantity')
      .addSelect('sku.upc', 'barcode')
      .addSelect('sku.id', 'skuId')
      .addSelect('store.id', 'storeId')
      .addSelect('store.name', 'storeName')
      .from(Quantity, 'm')
      .leftJoin(Store, 'store', 'store.id = m.storeId')
      .leftJoin(Sku, 'sku', 'sku.id = m.skuId');
  },
})
export class QuantityView implements IQuantityView {
  @ViewColumn() id!: number;
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
      .select('m.id', 'id')
      .addSelect('sku.name', 'name')
      .addSelect('sku.upc', 'barcode')
      .addSelect('m.price', 'price')
      .addSelect('m.cost', 'cost')
      .addSelect('sku.id', 'skuId')
      .addSelect('pl.id', 'priceLevelId')
      .addSelect('pl.name', 'priceLevelName')
      .from(Price, 'm')
      .leftJoin(PriceLevel, 'pl', 'pl.id = m.priceLevelId')
      .leftJoin(Sku, 'sku', 'sku.id = m.skuId');
  },
})
export class PriceView implements IPriceView {
  @ViewColumn() id!: number;
  @ViewColumn() name!: string;
  @ViewColumn() skuId!: number;
  @ViewColumn() price!: number;
  @ViewColumn() cost!: number;
  @ViewColumn() barcode!: string;
  @ViewColumn() priceLevelId!: number;
  @ViewColumn() priceLevelName!: string;
}

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('m.id', 'skuId')
      .addSelect('ROW_NUMBER() OVER (ORDER BY m.id)', 'id')
      .addSelect('m.upc', 'barcode')
      .addSelect('m.name', 'name')
      .addSelect('m.description', 'description')
      .addSelect('pv.price', 'price')
      .addSelect('pv.cost', 'cost')
      .addSelect('pv.priceLevelId', 'priceLevelId')
      .addSelect('pv.priceLevelName', 'priceLevelName')
      .addSelect('qv.storeId', 'storeId')
      .addSelect('qv.quantity', 'quantity')
      .addSelect('qv.storeName', 'storeName')
      .addSelect('p.category', 'category')
      .addSelect('p.department', 'department')
      .addSelect('p.id', 'productId')
      .addSelect('p.upc', 'productUpc')
      .from(Sku, 'm')
      .leftJoin(ProductView, 'p', 'p.id = m.productId')
      .leftJoin(PriceView, 'pv', 'pv.skuId = m.id')
      .leftJoin(QuantityView, 'qv', 'qv.skuId = m.id');
  },
})
export class SkuView implements ISkuView {
  @ViewColumn() id!: number;
  @ViewColumn() skuId!: number;
  @ViewColumn() barcode!: string;
  @ViewColumn() name!: string;
  @ViewColumn() price!: number;
  @ViewColumn() cost!: number;
  @ViewColumn() priceLevelId!: number;
  @ViewColumn() priceLevelName!: string;
  @ViewColumn() storeId!: number;
  @ViewColumn() quantity!: number;
  @ViewColumn() storeName!: string;
  @ViewColumn() category!: string;
  @ViewColumn() department!: string;
  @ViewColumn() productId!: number;
  @ViewColumn() productUpc!: string;
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
