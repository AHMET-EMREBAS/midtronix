import { ICreateSaleDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const SaleFormBuilder = new FormGroupBuilder<ICreateSaleDto>('Sale Form')
  .add('cart')
  .add('store')
  .add('total')
  .add('subtotal')
  .add('customer')
  .add('employee')
  .add('accountBalancePayment')
  .add('cardPayment')
  .add('cashPayment')
  .done()
  .lock();
