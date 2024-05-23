import { IOrderView } from '@mdtx/common';
import { ViewEntity, ViewColumn } from '@mdtx/core';
import { Order } from './order';
import { SkuView } from './product.view';
import { Price } from './product';
import { Cart } from './cart';
import { DiscountView } from './discount.view';

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'id')
      .addSelect('main.skuId', 'skuId')
      .addSelect('main.cartId', 'cartId')
      .addSelect('cart.ownerId', 'customerId')
      .addSelect('cart.userId', 'employeeId')
      .addSelect('cart.storeId', 'storeId')
      .addSelect('main.priceLevelId', 'priceLevelId')
      .addSelect('skuView.name', 'name')
      .addSelect('skuView.barcode', 'barcode')
      .addSelect('main.quantity', 'quantity')
      .addSelect('price.price', 'price')
      .addSelect('TRUNC(COALESCE(discount.fixed, 0), 2)', 'fixedDiscount')
      .addSelect('TRUNC(COALESCE(discount.percent, 0), 2)', 'percentDiscount')
      .addSelect('price.cost', 'cost')

      .addSelect(
        'TRUNC(COALESCE(((price.price - discount.fixed) - (price.price * discount.percent / 100)) * main.quantity, price.price * main.quantity), 2)',
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
      .leftJoin(SkuView, 'skuView', 'skuView.id = main.skuId')
      .orderBy('main.createdAt', 'ASC');
  },
})
export class OrderView implements IOrderView {
  @ViewColumn() id!: number;
  @ViewColumn() skuId!: number;
  @ViewColumn() cartId!: number;
  @ViewColumn() customerId!: number;
  @ViewColumn() employeeId!: number;
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
