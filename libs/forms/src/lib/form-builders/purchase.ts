import { ICreatePurchaseDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const PurchaseFormBuilder = new FormGroupBuilder<ICreatePurchaseDto>(
  'Purchase Form'
)
  .add('sku')
  .required()

  .add('manufacturer')
  .required()

  .add('employee')
  .required()

  .add('quantity')
  .required()
  .min(1)

  .add('taxrate')
  .required()
  .min(0)

  .add('unitCost')
  .required()
  .min(0)

  .add('deliveryCost')
  .required()
  .min(0)

  .add('orderDate')

  .add('deliveryDate')

  .add('notes')

  .done()
  .lock();
