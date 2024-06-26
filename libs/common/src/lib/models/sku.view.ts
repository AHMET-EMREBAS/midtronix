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

export interface ISkuView {
  id: number;
  skuId: number;
  barcode: string;
  name: string;
  description: string;
  price: number;
  cost: number;
  taxrate: number;
  priceId: number;
  priceLevelId: number;
  priceLevelName: string;
  storeId: number;
  quantity: number;
  quantityId: number;
  storeName: string;
  category: string;
  department: string;
  productId: number;
  productUpc: string;
}

export type ISkuViewRaw = ISkuView;
