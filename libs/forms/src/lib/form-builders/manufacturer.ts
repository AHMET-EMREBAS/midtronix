import { ICreateManufacturerDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const ManufacturerFormBuilder =
  new FormGroupBuilder<ICreateManufacturerDto>('Manufacturer Form')
    .add('name')
    .required()
    .shortText()

    .add('description')
    .longText()

    .done()
    .lock();
