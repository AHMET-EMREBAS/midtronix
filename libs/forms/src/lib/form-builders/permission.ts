import { ICreatePermissionDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const PermissionFormBuilder = new FormGroupBuilder<ICreatePermissionDto>(
  'Permission Form'
)
  .add('name')
  .required()
  .shortText()

  .done()
  .lock();
