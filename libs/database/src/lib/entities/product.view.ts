import { ViewColumn, ViewEntity } from '@mdtx/core';
import { Price, PriceLevel, Quantity, Sku } from './product';
import { Store } from './store';
import { IPriceView, IQuantityView } from '@mdtx/common';

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
      .select('m.id', 'id')
      .addSelect('m.upc', 'barcode')
      .addSelect('m.name', 'name')
      .addSelect('pv.price', 'price')
      .addSelect('pv.priceLevelId', 'priceLevelId')
      .addSelect('pv.priceLevelName', 'priceLevelName')
      .addSelect('qv.storeId', 'storeId')
      .addSelect('qv.quantity', 'quantity')
      .addSelect('qv.storeName', 'storeName')
      .from(Sku, 'm')
      .leftJoin(PriceView, 'pv', 'pv.skuId = m.id')
      .leftJoin(QuantityView, 'qv', 'qv.skuId = m.id');
  },
})
export class SkuView {}
