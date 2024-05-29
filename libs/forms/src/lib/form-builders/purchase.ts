import { ICreatePurchaseDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const PurchaseFormBuilder = new FormGroupBuilder<ICreatePurchaseDto>(
  'Purchase Form'
)
  .add('sku')
  .add('manufacturer')
  .add('employee')
  .add('notes')
  .add('quantity')
  .add('unitCost')
  .add('deliveryCost')
  .add('orderDate')
  .add('deliveryDate')

  .done()
  .lock();
