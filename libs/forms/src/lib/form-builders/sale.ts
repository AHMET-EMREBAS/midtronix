import { ICreateSaleDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const SaleFormBuilder = new FormGroupBuilder<ICreateSaleDto>('Sale Form')
  .add('cart')
  .required()
  .add('taxrate')
  .required()
  .add('cardPayment')
  .required()
  .add('cashPayment')
  .required()
  .add('orders')
  .required()

  .done()
  .lock();
