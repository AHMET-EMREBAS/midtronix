import { ICreateTicketDto } from '@mdtx/common';
import { CreateCommonTaskDto } from './__base.dto';
import { Exclude, IDDto, IDObjectProperty, PartialType } from '@mdtx/core';

@Exclude()
export class CreateTicketDto
  extends CreateCommonTaskDto
  implements ICreateTicketDto
{
  @IDObjectProperty({ required: true }) customer!: IDDto;


  
}

@Exclude()
export class UpdateTicketDto extends PartialType(CreateTicketDto) {}
