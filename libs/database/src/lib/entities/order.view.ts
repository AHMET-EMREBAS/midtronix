import { IOrderView } from '@mdtx/common';
import { ViewEntity, ViewColumn } from '@mdtx/core';
import { Order } from './order';
import { SkuView } from './product.view';
import { PriceLevel } from './product';
import { CartView } from './cart.view';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'orderId')
      .addSelect('ROW_NUMBER() OVER (ORDER BY m.id)', 'id')
      .addSelect('sku.id', 'skuId')
      .addSelect('cart.id', 'cartId')
      .addSelect('main.priceLevelId', 'priceLevelId')
      .addSelect('main.storeId', 'storeId')
      .addSelect('sku.name', 'name')
      .addSelect('sku.barcode', 'barcode')
      .addSelect('main.quantity', 'quantity')
      .addSelect('sku.price', 'price')
      .addSelect('sku.cost', 'cost')
      .from(Order, 'main')
      .leftJoin(PriceLevel, 'pl', 'pl.id = main.priceLevelId')
      .leftJoin(
        SkuView,
        'sku',
        'sku.priceLevelId = main.priceLevelId and sku.storeId = main.storeId'
      )
      .leftJoin(CartView, 'cart', 'cart.id = main.cartId');
  },
})
export class OrderView implements IOrderView {
  @ViewColumn() id!: number;
  @ViewColumn() orderId!: number;
  @ViewColumn() skuId!: number;
  @ViewColumn() cartId!: number;
  @ViewColumn() priceLevelId!: number;
  @ViewColumn() storeId!: number;
  @ViewColumn() name!: string;
  @ViewColumn() barcode!: string;
  @ViewColumn() quantity!: number;
  @ViewColumn() price!: number;
  @ViewColumn() cost!: number;
}
