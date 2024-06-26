import { ICreateTicketDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const TicketFormBuilder = new FormGroupBuilder<ICreateTicketDto>(
  'Ticket Form'
)

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
  .range(1, 5)

  .add('assignees')

  .add('customer')
  .required()

  .done()
  .lock();
