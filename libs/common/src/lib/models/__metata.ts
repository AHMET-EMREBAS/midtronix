import { TableColumnOption } from '../table';
import { IBaseEntity } from './__base';
import { IProduct } from './product';
import { ISkuView } from './sku.view';

export function wrapTableOptions<T extends IBaseEntity>(
  options: TableColumnOption<T>
): TableColumnOption<T> {
  return {
    id: { name: 'id', label: '#', order: 0 },
    ...options,
    createdAt: {
      name: 'createdAt',
      label: 'Created',
      value(v) {
        return v ? new Date(v.createdAt).toLocaleDateString() : 'None';
      },
      order: 101,
    },
    deletedAt: {
      name: 'deletedAt',
      label: 'Deleted',
      value(v) {
        return v ? new Date(v.deletedAt).toLocaleDateString() : 'None';
      },
      order: 102,
    },
    updatedAt: {
      name: 'updatedAt',
      label: 'Updated',
      value(v) {
        return v ? new Date(v.updatedAt).toLocaleDateString() : 'None';
      },
      order: 103,
    },
  };
}
export const ProductTableOption: TableColumnOption<IProduct> =
  wrapTableOptions<IProduct>({
    upc: { name: 'upc', label: 'barcode' },
    category: { name: 'category' },
    department: { name: 'department' },
    description: { name: 'description' },
  });

export const SkuViewTableOption: TableColumnOption<ISkuView> =
  wrapTableOptions<ISkuView>({
    barcode: { name: 'barcode' },
    price: { name: 'price' },
    cost: { name: 'cost' },
    category: { name: 'category' },
    department: { name: 'department' },
    quantity: { name: 'quantity' },
    storeName: { name: 'storeName' },
    priceLevelName: { name: 'priceLevelName' },
  });
