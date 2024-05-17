import { ICreateTaskDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const TaskFormBuilder = new FormGroupBuilder<ICreateTaskDto>('Task Form')

  .add('name')
  .required()
  .shortText()

  .add('description')
  .longText()

  .add('difficulty')
  .range(1, 10)

  .add('due')
  .date()

  .add('startDate')
  .date()

  .add('finishDate')
  .date()

  .add('status')

  .range(1, 4)

  .shortText()

  .add('assignees')

  .add('sprint')

  

  .done()
  .lock();
