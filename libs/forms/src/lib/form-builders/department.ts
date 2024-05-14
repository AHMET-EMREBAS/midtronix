import { ICreateDepartmentDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const DepartmentFormBuilder = new FormGroupBuilder<ICreateDepartmentDto>(
  'Department Form'
)
  .add('name')
  .required()
  .shortText()
  
  .done()
  .lock();
