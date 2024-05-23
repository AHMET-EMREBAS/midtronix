import { ICreateSaleDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const SaleFormBuilder = new FormGroupBuilder<ICreateSaleDto>('Sale Form')
  .add('cart')
  .required()
  .add('taxrate')
  .add('cardPayment')
  .add('cashPayment')
  .add('orders')
  .required()

  .done()
  .lock();
