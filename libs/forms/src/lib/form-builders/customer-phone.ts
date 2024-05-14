import { ICreateCustomerPhoneDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerPhoneFormBuilder =
  new FormGroupBuilder<ICreateCustomerPhoneDto>('CustomerPhone Form')
    .add('phone')
    .required()
    .phone()

    .done()
    .lock();
