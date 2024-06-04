import { IOrderView } from '@mdtx/common';
import { ViewEntity, ViewColumn } from '@mdtx/core';
import { Order } from './order';
import { SkuView } from './product.view';
import { Cart } from './cart/cart';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('main.skuId', 'skuId')
      .addSelect('main.cartId', 'cartId')
      .addSelect('main.taxrate', 'taxrate')
      .addSelect('skuView.name', 'name')
      .addSelect('skuView.barcode', 'barcode')
      .addSelect('main.quantity', 'quantity')

      .addSelect('main.unitPrice', 'unitPrice')
      .addSelect('main.subtotal', 'subtotal')
      .addSelect('main.total', 'total')
      .from(Order, 'main')
      .leftJoin(Cart, 'cart', 'cart.id = main.cartId')
      .innerJoin(SkuView, 'skuView', 'skuView.skuId = main.skuId')
      .orderBy('main.createdAt', 'ASC');
  },
})
export class OrderView implements IOrderView {
  @ViewColumn() id!: number;
  @ViewColumn() skuId!: number;
  @ViewColumn() cartId!: number;
  @ViewColumn() name!: string;
  @ViewColumn() barcode!: string;
  @ViewColumn() taxrate!: number;
  @ViewColumn() quantity!: number;
  @ViewColumn() unitPrice!: number;
  @ViewColumn() subtotal!: number;
  @ViewColumn() total!: number;
}
