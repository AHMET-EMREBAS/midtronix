import { ICreateCustomerAccountDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerAccountFormBuilder =
  new FormGroupBuilder<ICreateCustomerAccountDto>('CustomerAccount Form')
    .add('name')
    .required()
    .shortText()
    .done()
    .lock();
