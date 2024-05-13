import {
  UnsetRelationDto,
  PaginatorDto,
  RestRouteBuilder,
  RelationDto,
} from '@mdtx/core';
import { CreateTicketDto, Ticket, UpdateTicketDto } from '@mdtx/database';
import { TicketService } from './ticket.service';

const R = RestRouteBuilder.get('Ticket');

@R.Controler()
export class TicketController {
  constructor(protected readonly service: TicketService) {}

  @R.SaveOne()
  save(@R.Body() body: CreateTicketDto) {
    return this.service.save(body);
  }

  @R.FindAll()
  findAll(@R.Query() paginator: PaginatorDto) {
    return this.service.findAll({ ...paginator });
  }

  @R.FindOneById()
  findOneById(@R.ParamID() id: number) {
    return this.service.findOneById(id);
  }

  @R.DeleteOne()
  deleteById(@R.ParamID() id: number) {
    return this.service.deleteById(id);
  }

  @R.UpdateOne()
  updateOneById(@R.ParamID() id: number, @R.Body() body: UpdateTicketDto) {
    return this.service.updateOneById(id, body);
  }

  @R.AddRelation()
  addRelationToTicket(@R.Param() param: RelationDto<Ticket>) {
    return this.service.addRelation(param);
  }

  @R.RemoveRelation()
  removeRelation(@R.Param() param: RelationDto<Ticket>) {
    return this.service.removeRelation(param);
  }

  @R.SetRelation()
  setRelation(@R.Param() param: RelationDto<Ticket>) {
    return this.service.setRelation(param);
  }

  @R.UnsetRelation()
  unsetRelation(@R.Param() param: UnsetRelationDto<Ticket>) {
    return this.service.unsetRelation(param);
  }
}
