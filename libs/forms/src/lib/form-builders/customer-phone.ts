import { ICreateCustomerPhoneDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerPhoneFormBuilder =
  new FormGroupBuilder<ICreateCustomerPhoneDto>('CustomerPhone Form')
    .add('phone')
    .required()
    .phone()
    
    .add('owner')
    .required()
  
    .done()
    .lock();
