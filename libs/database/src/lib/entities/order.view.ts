import { IOrderView } from '@mdtx/common';
import { ViewEntity, ViewColumn } from '@mdtx/core';
import { Order } from './order';
import { SkuView } from './product.view';
import { Price, PriceLevel, Sku } from './product';
import { CartView } from './cart.view';
import { Cart } from './cart';
import { Discount } from './discount';
import { DiscountView } from './discount.view';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'orderId')
      .addSelect('ROW_NUMBER() OVER (ORDER BY main.id)', 'id')
      .addSelect('main.skuId', 'skuId')
      .addSelect('main.cartId', 'cartId')
      .addSelect('main.priceLevelId', 'priceLevelId')
      .addSelect('cart.storeId', 'storeId')
      .addSelect('sku.name', 'name')
      .addSelect('sku.barcode', 'barcode')
      .addSelect('main.quantity', 'quantity')
      .addSelect('price.price', 'price')
      .addSelect('COALESCE(discount.fixed, 0)', 'fixedDiscount')
      .addSelect('COALESCE(discount.percent, 0)', 'percentDiscount')
      .addSelect('price.cost', 'cost')

      .addSelect(
        'COALESCE(((price.price - discount.fixed) - (price.price * discount.percent / 100)) * main.quantity, price.price * main.quantity)',
        'subtotal'
      )
      .from(Order, 'main')
      .leftJoin(
        Price,
        'price',
        'price.skuId = main.skuId AND price.priceLevelId = main.priceLevelId'
      )
      .leftJoin(DiscountView, 'discount', 'discount.skuId = main.skuId')
      .leftJoin(Cart, 'cart', 'cart.id = main.cartId')
      .leftJoin(SkuView, 'sku', 'sku.id = main.skuId');
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
  @ViewColumn() fixedDiscount!: number;
  @ViewColumn() percentDiscount!: number;
  @ViewColumn() subtotal!: number;
}
export const OrderViewEntities = [
  Order,
  OrderView,
  Sku,
  Cart,
  PriceLevel,
  CartView,
  SkuView,
];
