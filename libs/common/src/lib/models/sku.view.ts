export const SKU_VIEW_PROPERTIES = [
  'id',
  'skuId',
  'barcode',
  'name',
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
  barcode: string;
  name: string;
  price: number;
  cost: number;
  taxrate: number;
  priceId: number;
  priceLevelId: number;
  priceLevelName: string;
  storeId: number;
  quantity: number;
  storeName: string;
  category: string;
  department: string;
  productId: number;
  productUpc: string;
}

export type ISkuViewRaw = ISkuView;
