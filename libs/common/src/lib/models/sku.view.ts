import { PropertyType } from '../types/type';
import { IBaseEntity } from './__base';

export const PRODUCT_VIEW_PROPERTIES = [
  'barcode',
  'name',
  'description',
  'category',
  'department',
];

export const SKU_VIEW_PROPERTIES = [
  'id',
  'skuId',
  'barcode',
  'name',
  'description',
  'price',
  'cost',
  'priceLevelId',
  'priceLevelName',
  'storeId',
  'quantity',
  'storeName',
  'category',
  'department',
  'productId',
  'productUpc',
];

export interface ISkuView extends PropertyType<IBaseEntity, string> {
  skuId: string;
  barcode: string;
  name: string;
  description: string;
  price: string;
  cost: string;
  taxrate: string;
  priceId: string;
  priceLevelId: string;
  priceLevelName: string;
  storeId: string;
  quantity: string;
  quantityId: string;
  storeName: string;
  category: string;
  department: string;
  productId: string;
  productUpc: string;
}

export type ISkuViewRaw = ISkuView;
