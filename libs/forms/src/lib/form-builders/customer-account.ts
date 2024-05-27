import { ICreateCustomerAccountDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerAccountFormBuilder =
  new FormGroupBuilder<ICreateCustomerAccountDto>('CustomerAccount Form')
    .add('balance')
    .required()
    .min(0)

    .add('priceLevel')
    .required()

    .add('customer')
    .required()

    .done()
    .lock();
